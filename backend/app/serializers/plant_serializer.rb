class PlantSerializer
  include FastJsonapi::ObjectSerializer
  attributes :species, :nickname, :description, :pot
end
