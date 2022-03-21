class CreateClinics < ActiveRecord::Migration[6.1]
  def change
    create_table :clinics do |t|
      t.string :name, null: false
      t.text :address, null: false
      t.text :about, null: false
      t.string :image, default: 'https://nekolighting.com/wp-content/uploads/2020/02/Kardiologen-Celle-2XII2734-web.jpg'

      t.timestamps
    end
  end
end
