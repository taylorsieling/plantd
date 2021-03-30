class CaresController < ApplicationController

    def index
        all_care = Care.all
        render json: CareSerializer.new(all_care, {include: [:plant]})
    end

    def show
        care = Care.find(params[:id])
        render json: CareSerializer.new(all_care, {include: [:plant]})
    end

    def create
        care = Care.find(params[:id])
        if care.save
            render json: CareSerializer.new(care)
        else
            render json: {messages: 'could not add care'}
        end
    end

    private

    def care_params 
        params.require(:care).permit(:care_type, :date, :notes, :plant_id)
    end

end
   