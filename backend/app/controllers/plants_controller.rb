class PlantsController < ApplicationController

    # before_action :set_plant, only: [:show, :delete, :update]

    def index
        plants = Plant.all
        # options = {include: [:cares]}
        render json: PlantSerializer.new(plants)
        # render json: plants.to_json(include: {cares: {only: [:care_type, :notes, :date]}})
    end

    def show
        plant = Plant.find(params[:id])
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
        plant = Plant.find(params[:id])
        plant.destroy
        render json: {message: 'Successfully Deleted'}
    end

    def update
        plant = Plant.find(params[:id])
        plant.update(plant_params)
        render json: PlantSerializer.new(plant)
    end

    private

    def plant_params
        params.require(:plant).permit(:species, :nickname, :description, :pot, :image_url)
    end

end
