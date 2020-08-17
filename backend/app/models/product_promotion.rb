class ProductPromotion < ApplicationRecord
  validates_uniqueness_of :product_id, scope: :promotion_id
  belongs_to :product
  belongs_to :promotion
end
