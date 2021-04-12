class CaresController < ApplicationController

    def index
        cares = Care.all
        render json: CareSerializer.new(cares)
    end

    def show
        care = Care.find(params[:id])
        render json: CareSerializer.new(care)
    end

    def create
        care = Care.new(care_params)
        if care.save
            render json: CareSerializer.new(care)
        else
            render json: {error: 'Could not care for plant at this time.'}
        end
    end

    def delete
    end

    def update
        care = Care.find(params[:id])
        care.update(care_params)
        render json: CareSerializer.new(care)
    end

    private

    def care_params 
        params.require(:care).permit(:care_type, :date, :notes, :plant_id)
    end

end
   