class PlantsController < ApplicationController

    before_action :set_plant, only: [:show, :delete, :update]

    def index
        plants = Plant.all
        # options = {include: [:cares]}
        render json: PlantSerializer.new(plants)
        # render json: plants.to_json(include: {cares: {only: [:care_type, :notes, :date]}})
    end

    def show
        options = {include: [:cares]}
        render json: PlantSerializer.new(plant, options)
    end

    def create
        plant = Plant.new(plant_params)
        if plant.save
            render json: PlantSerializer.new(plant)
        else
            render json: {error: 'plant could not be added'}
        end
    end

    def destroy
        plant.destroy
        render json: {message: 'Successfully Deleted'}
    end

    def update
        plant.update(plant_params)
        render json: {message: 'Successfully Updated!'}
    end

    private

    def plant_params
        params.require(:plant).permit(:nickname, :species, :description, :pot)
    end

    def set_plant
        plant = Plant.find(params[:id])
    end

end
