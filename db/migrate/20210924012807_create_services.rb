class CreateServices < ActiveRecord::Migration[6.1]
  def change
    create_table :services do |t|
      t.string :job_title
      t.text :desc
      t.string :category
      t.belongs_to :worker, null: false, foreign_key: true

      t.timestamps
    end
  end
end
