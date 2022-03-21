class Api::V1::ClinicsController < ApplicationController
  def index
    clinic = Clinic.all.order(created_at: :desc)
    render json: clinic
  end

  def create
    clinic = Clinic.create!(clinic_params)
    if recipe
      render json: clinic
    else
      render json: clinic.errors
    end
  end

  def show
    if clinic
      render json: clinic
    else
      render json: clinic.errors
    end
  end

  def destroy
    clinic&.destroy
    render json: { message: 'Clinic deleted' }
  end

  private

  def clinic_params
    params.permit(:name, :image, :about, :address)
  end
end
