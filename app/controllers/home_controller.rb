class HomeController < ApplicationController

  def index
  	
  end

  def action
  	link = Link.new
  	link.long = params[:long]
  	link.save!
  	newLink = Link.find(link.id)
  	newLink.short = "http://urlshort.en/#{bijective_encode(link.id * 24948484)}"
  	newLink.save!
  	render json: { url: newLink.short }
  end

  private
  ALPHABET = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789".split(//)
  def bijective_encode(i)
	  return ALPHABET[0] if i == 0
	  s = ''
	  base = ALPHABET.length
	  while i > 0
	    s << ALPHABET[i.modulo(base)]
	    i /= base
	  end
	  s.reverse
	end
	def bijective_decode(s)
	  i = 0
	  base = ALPHABET.length
	  s.each_char { |c| i = i * base + ALPHABET.index(c) }
	  i
	end
end
