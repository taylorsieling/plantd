class CaresController < ApplicationController

    def index
        all_care = Care.all
        render json: CareSerializer.new(all_care, {include: [:plant]})
    end

    def show
        care = Care.find(params[:id])
        render json: CareSerializer.new(all_care, {include: [:plant]})
    end

end
   