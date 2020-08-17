class CreatePromotions < ActiveRecord::Migration[6.0]
  def change
    create_table :promotions do |t|
      t.string :code
      t.boolean :active
      t.decimal :discount

      t.timestamps
    end
  end
end
