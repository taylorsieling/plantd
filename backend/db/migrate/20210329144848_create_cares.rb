class CreateCares < ActiveRecord::Migration[6.1]
  def change
    create_table :cares do |t|
      t.string :type
      t.text :notes
      t.date :date
      t.belongs_to :plant, null: false, foreign_key: true

      t.timestamps
    end
  end
end
