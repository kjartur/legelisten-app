class CreateClinics < ActiveRecord::Migration[6.1]
  def change
    create_table :clinics do |t|
      t.string :name
      t.text :address
      t.text :about
      t.string :image

      t.timestamps
    end
  end
end
