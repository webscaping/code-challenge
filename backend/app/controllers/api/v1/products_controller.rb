class Api::V1::ProductsController < ApplicationController
    before_action :set_product, only: [:show, :update, :destroy]

    # GET /products
    # Returns all products
    def index
        @products = Product.includes(:department, :promotions)
        render json: ProductSerializer.new(@products).serializable_hash.to_json
    end

    # GET /products/{id}
    # Returns product based on id param
    def show
        render json: @product
    end

    # POST /products
    # Creates a new product record to db

    def create
        @product = product.new(product_params)

        if @product.save
            render json: @product, status: :created, location: api_v1_product_url(@product)
        else
            render json: @product.errors, status: :unprocessable_entity
        end
    end

    # PATCH / PUT /products/{id}
    # updates the product record specified in id param
    def update
        if @product.update(product_params)
            render json: @product
        else
            render json: @product.errors, status: :unprocessable_entity
        end
    end

    # DELETE /products/{id}
    # deletes the product record from db
    def destroy
        @product.destroy
    end

    private

        # gets the db record based on url id param
        def set_product
            @product = Product.find(params[:id])
        end

        # white list params
        def product_params
            params.require(:product).permit(:name)
        end
    
end
