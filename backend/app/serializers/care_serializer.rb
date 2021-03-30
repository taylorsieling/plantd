class CareSerializer
  include FastJsonapi::ObjectSerializer
  attributes :care_type, :notes, :date, :id, :plant_id
  belongs_to :plant
end
