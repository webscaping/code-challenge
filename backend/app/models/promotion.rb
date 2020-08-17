class Promotion < ApplicationRecord
    validates :code, uniqueness: true
    has_many :product_promotions
    has_many :products, through: :product_promotions
end
