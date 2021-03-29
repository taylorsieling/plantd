class CreatePlants < ActiveRecord::Migration[6.1]
  def change
    create_table :plants do |t|
      t.string :species
      t.string :nickname
      t.text :description
      t.string :pot

      t.timestamps
    end
  end
end
