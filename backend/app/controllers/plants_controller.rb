class PlantsController < ApplicationController

    def index
        plants = Plant.all
        options = {include: [:cares]}
        render json: PlantSerializer.new(plants, options)
        # render json: plants.to_json(include: {cares: {only: [:care_type, :notes, :date]}})
    end

    def show
        plant = Plant.find(params[:id])
        options = {include: [:cares]}
        render json: PlantSerializer.new(plant, options)
    end

end
