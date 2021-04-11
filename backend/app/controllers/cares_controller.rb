class CaresController < ApplicationController

    def index
        cares = Care.all
        render json: CareSerializer.new(cares)
    end

    def show
        care = Care.find(params[:id])
        render json: CareSerializer.new(care)
    end

    # {include: [:care]}

    def create
        care = Care.find(params[:id])
        if care.save
            render json: CareSerializer.new(care)
        else
            render json: {messages: 'Could not care for care at this time.'}
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
        params.require(:care).permit(:care_type, :date, :notes)
    end

end
   