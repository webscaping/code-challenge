class Product < ApplicationRecord
  validates :name, uniqueness: true
  belongs_to :department
  has_many :product_promotions
  has_many :promotions, through: :product_promotions
end
