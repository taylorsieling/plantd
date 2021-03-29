class CareSerializer
  include FastJsonapi::ObjectSerializer
  attributes :care_type, :notes, :date
end
