class PromotionSerializer
    include JSONAPI::Serializer

    attributes  :code,
                :active,
                :discount
    has_many    :products
end