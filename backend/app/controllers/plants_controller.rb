class PlantsController < ApplicationController

    def index
        plants = Plant.all
        render json: plants.to_json(include: [:cares])
    end

    def show
        plant = Plant.find(params[:id])
        render json: plant
    end

end
