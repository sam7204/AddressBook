class AddressbookController < ApplicationController 
    def index
    addressbook = AddressBook.all    
   render json: addressbook, status: :ok  
  end
  def create
    addressbook = AddressBook.create(addressbook_params)
    if addressbook.save
         render json: addressbook, status: :created
    else
        render json: {data:addressbook.errors}, status: :errors    
    end    
  end
  def destroy
    addressbook = AddressBook.destroy(params[:id])
    render json: addressbook, status: :ok
  end
  def update
    addressbook = AddressBook.find(params[:id])
    if addressbook.update(:fname => addressbook_params[:fname],:lanme => addressbook_params[:lanme],:email => addressbook_params[:email],:phnum => addressbook_params[:phnum],:note=>addressbook_params[:note],:DOB => addressbook_params[:DOB],:cust => addressbook_params[:cust])
      render json: addressbook, status: :ok
    else
      ender json: {data:addressbook.errors}, status: :errors   
    end  
  end
  def show 
    addressbook = AddressBook.find(params[:id])
    render json: addressbook, status: :found
  end
  private  
   def addressbook_params    
    params.permit(:fname,:lanme,:email,:phnum,:note,:DOB,:cust) 
   end 
end
