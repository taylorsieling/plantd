class PlantSerializer
  include FastJsonapi::ObjectSerializer
  attributes :species, :nickname, :description, :pot
  has_many :cares
end
