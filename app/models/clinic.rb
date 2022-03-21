class Clinic < ApplicationRecord
    validates :name, presence: true
    validates :address, presence: true
    validates :about, presence: true
end
