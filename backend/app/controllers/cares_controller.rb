class CaresController < ApplicationController

    def index
        all_care = Care.all
        render json: all_care.to_json(except: [:created_at, :updated_at, :plant_id], include: :plant)
    end

    def show
        care = Care.find(params[:id])
        render json: care
    end

end
   