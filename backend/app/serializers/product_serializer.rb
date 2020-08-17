class ProductSerializer
    include JSONAPI::Serializer
    attributes  :name, 
                :price
    belongs_to  :department
    has_many    :promotions
end