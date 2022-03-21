9.times do |i|
    Clinic.create(
      name: "Clinic #{i + 1}",
      address: 'Slottsgaten 11, 0284 Oslo',
      about: 'Fastlege'
    )
  end