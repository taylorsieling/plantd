class PlantSerializer
  include FastJsonapi::ObjectSerializer
  attributes :species, :nickname, :description, :pot, :id, :image_url
  has_many :cares
end
