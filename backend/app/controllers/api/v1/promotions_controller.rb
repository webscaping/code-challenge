class Api::V1::PromotionsController < ApplicationController
    before_action :set_promotion, only: [:show, :update, :destroy]

    # GET /promotions
    # Returns all promotions
    def index
        @promotions = Promotion.all
        render json: PromotionSerializer.new(@promotions).serializable_hash.to_json
    end

    # GET /promotions/{id}
    # Returns promotion based on id param
    def show
        render json: @promotion
    end

    # POST /promotions
    # Creates a new promotion record to db

    def create
        @promotion = promotion.new(promotion_params)

        if @promotion.save
            render json: @promotion, status: :created, location: api_v1_promotion_url(@promotion)
        else
            render json: @promotion.errors, status: :unprocessable_entity
        end
    end

    # PATCH / PUT /promotions/{id}
    # updates the promotion record specified in id param
    def update
        if @promotion.update(promotion_params)
            render json: @promotion
        else
            render json: @promotion.errors, status: :unprocessable_entity
        end
    end

    # DELETE /promotions/{id}
    # deletes the promotion record from db
    def destroy
        @promotion.destroy
    end

    private

        # gets the db record based on url id param
        def set_promotion
            @promotion = Promotion.find(params[:id])
        end

        # white list params
        def promotion_params
            params.require(:promotion).permit(:name)
        end
end
