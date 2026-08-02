"use client";

import { useEffect, useState } from "react";
import Step1Service from "./components/Step1Service";
import Step2Animal from "./components/Step2Animal";
import Step3Pickup from "./components/Step3Pickup";
import Step4Destination from "./components/Step4Destination";
import services from "./data/services";

export default function MarcarPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedService, setSelectedService] = useState("");
  const [animalName, setAnimalName] = useState("");
  const [species, setSpecies] = useState("");
  const [breed, setBreed] = useState("");
  const [weight, setWeight] = useState("");
  const [selectedTemperaments, setSelectedTemperaments] = useState<string[]>(
    [],
  );
  const [biteHistory, setBiteHistory] = useState("");
  const [animalNotes, setAnimalNotes] = useState("");

  const [pickupAddress, setPickupAddress] = useState("");
  const [pickupPostalCode, setPickupPostalCode] = useState("");
  const [pickupCity, setPickupCity] = useState("");
  const [pickupLocationType, setPickupLocationType] = useState("");
  const [pickupContactName, setPickupContactName] = useState("");
  const [pickupContactPhone, setPickupContactPhone] = useState("");
  const [pickupNotes, setPickupNotes] = useState("");
  
  const [destinationName, setDestinationName] = useState("");
  const [destinationAddress, setDestinationAddress] = useState("");
  const [destinationPostalCode, setDestinationPostalCode] = useState("");
  const [destinationCity, setDestinationCity] = useState("");
  const [destinationType, setDestinationType] = useState("");
  const [destinationContactName, setDestinationContactName] = useState("");
  const [destinationContactPhone, setDestinationContactPhone] = useState("");
  const [destinationNotes, setDestinationNotes] = useState("");
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const serviceName = params.get("servico");

    const serviceFromUrl = services.find(
      (service) => service.name === serviceName,
    );

    if (serviceFromUrl) {
      setSelectedService(serviceFromUrl.id);
    }
  }, []);

  const animalStepComplete =
    animalName.trim() !== "" &&
    species !== "" &&
    weight.trim() !== "" &&
    selectedTemperaments.length > 0 &&
    biteHistory !== "";

  const pickupStepComplete =
  pickupAddress.trim() !== "" &&
  pickupPostalCode.trim() !== "" &&
  pickupCity.trim() !== "" &&
  pickupLocationType !== "" &&
  pickupContactName.trim() !== "" &&
  pickupContactPhone.trim() !== "";

  const destinationStepComplete =
  destinationName.trim() !== "" &&
  destinationAddress.trim() !== "" &&
  destinationPostalCode.trim() !== "" &&
  destinationCity.trim() !== "" &&
  destinationType !== "";
  return (
    <main className="min-h-screen bg-slate-50 px-6 py-16">
      <section className="mx-auto max-w-5xl">
        <div className="mb-10 text-center">
          <span className="inline-block rounded-full bg-green-100 px-4 py-2 text-sm font-medium text-green-700">
            Marcação PetMove
          </span>

          <h1 className="mt-4 text-4xl font-bold text-blue-950 md:text-5xl">
            Marcar transporte
          </h1>

          <p className="mt-4 text-lg text-gray-600">
            Vamos tratar da sua marcação em poucos passos.
          </p>
        </div>

        <div className="mb-10 flex items-center justify-center">
          {[1, 2, 3, 4, 5, 6].map((step, index) => (
            <div key={step} className="flex items-center">
              <div
                className={`flex h-9 w-9 items-center justify-center rounded-full font-semibold ${
                  step <= currentStep
                    ? "bg-blue-950 text-white"
                    : "bg-gray-200 text-gray-500"
                }`}
              >
                {step}
              </div>

              {index < 5 && (
                <div
                  className={`h-px w-5 sm:w-10 ${
                    step < currentStep ? "bg-blue-950" : "bg-gray-300"
                  }`}
                />
              )}
            </div>
          ))}
        </div>

        <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm md:p-10">
          {currentStep === 1 && (
            <Step1Service
              services={services}
              selectedService={selectedService}
              setSelectedService={setSelectedService}
              setCurrentStep={setCurrentStep}
            />
           )}
        {currentStep === 2 && (
          <Step2Animal
            animalName={animalName}
            setAnimalName={setAnimalName}
            species={species}
            setSpecies={setSpecies}
            breed={breed}
            setBreed={setBreed}
            weight={weight}
            setWeight={setWeight}
            selectedTemperaments={selectedTemperaments}
            setSelectedTemperaments={setSelectedTemperaments}
            biteHistory={biteHistory}
            setBiteHistory={setBiteHistory}
            animalNotes={animalNotes}
            setAnimalNotes={setAnimalNotes}
            animalStepComplete={animalStepComplete}
            setCurrentStep={setCurrentStep}
          />
        )}
        {currentStep === 3 && (
          <Step3Pickup
           pickupAddress={pickupAddress}
            setPickupAddress={setPickupAddress}
            pickupPostalCode={pickupPostalCode}
            setPickupPostalCode={setPickupPostalCode}
            pickupCity={pickupCity}
            setPickupCity={setPickupCity}
            pickupLocationType={pickupLocationType}
            setPickupLocationType={setPickupLocationType}
            pickupContactName={pickupContactName}
            setPickupContactName={setPickupContactName}
            pickupContactPhone={pickupContactPhone}
            setPickupContactPhone={setPickupContactPhone}
            pickupNotes={pickupNotes}
            setPickupNotes={setPickupNotes}
            pickupStepComplete={pickupStepComplete}
            setCurrentStep={setCurrentStep}
          />
        )}
        {currentStep === 4 && (
 <Step4Destination
  destinationName={destinationName}
  setDestinationName={setDestinationName}
  destinationAddress={destinationAddress}
  setDestinationAddress={setDestinationAddress}
  destinationPostalCode={destinationPostalCode}
  setDestinationPostalCode={setDestinationPostalCode}
  destinationCity={destinationCity}
  setDestinationCity={setDestinationCity}
  destinationType={destinationType}
  setDestinationType={setDestinationType}
  destinationContactName={destinationContactName}
  setDestinationContactName={setDestinationContactName}
  destinationContactPhone={destinationContactPhone}
  setDestinationContactPhone={setDestinationContactPhone}
  destinationNotes={destinationNotes}
  setDestinationNotes={setDestinationNotes}
  destinationStepComplete={destinationStepComplete}
  setCurrentStep={setCurrentStep}
/>
)}

        </div>
      </section>
    </main>
  );
}