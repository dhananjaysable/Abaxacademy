cat src/components/DirectionsRegistration.jsx | sed 's/<form className="space-y-4">/<form className="space-y-4" onSubmit={(e) => e.preventDefault()}>/' > tmp.jsx
mv tmp.jsx src/components/DirectionsRegistration.jsx
