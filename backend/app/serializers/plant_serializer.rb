class PlantSerializer
  include FastJsonapi::ObjectSerializer
  attributes :species, :nickname, :description, :pot, :id
  has_many :cares
end
