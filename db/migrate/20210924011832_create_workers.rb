class CreateWorkers < ActiveRecord::Migration[6.1]
  def change
    create_table :workers do |t|
      t.string :first_name
      t.string :last_name
      t.string :specialty
      t.string :phone
      t.string :email

      t.timestamps
    end
  end
end
