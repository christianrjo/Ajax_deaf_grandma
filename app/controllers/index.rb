get '/' do
  @grandma = params[:grandma]
  # Look in app/views/index.erb
  erb :index
end

post '/grandma' do
  p params.inspect
  @input = params[:user_input]
  if @input.upcase == @input
    @grandma = "Not since 1967!"
  else
    @grandma = "CANT HEAR YOU, SPEAK UP!"
  end
   erb :grandma_says, layout: false
end
