class CreateAddressBooks < ActiveRecord::Migration[6.1]
  def change
    create_table :address_books do |t|
      t.string :fname
      t.string :lanme
      t.string :email
      t.integer :phnum
      t.string :note
      t.date :DOB
      t.string :cust

      t.timestamps
    end
  end
end
