// src/pages/ComparePage.tsx
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import fBike from '@/assets/final_bike1.png';
import fBike1 from '@/assets/bajaj.jpeg';
import fBike2 from '@/assets/ather.jpeg';
import fBike3 from '@/assets/tvs.jpeg';
import fBike4 from '@/assets/bajj.jpeg';
import fBike5 from '@/assets/hero.jpeg';
import { Button } from "../components/ui/button";

/*
 This page reads compareList from localStorage (array of product ids)
 and renders a side-by-side comparison table. Users can add/remove
 other products from the list via checkboxes in the right-hand column.
*/

const allProducts = [
  { id: 1, name: "Honda Activa 6G", brand: "Honda", price: 75000, mileage: 60, engine: "109.51 cc", fuelType: "Petrol", location: "Mumbai", dealer: "Honda Showroom Central", image: fBike },
  { id: 2, name: "Royal Enfield Classic 350", brand: "Royal Enfield", price: 195000, mileage: 40, engine: "349 cc", fuelType: "Petrol", location: "Delhi", dealer: "Royal Enfield Store", image: fBike1},
  { id: 3, name: "Ather 450X", brand: "Ather", price: 140000, mileage: 85, engine: "Electric", fuelType: "Electric", location: "Bangalore", dealer: "Ather Space", image: fBike2 },
  { id: 4, name: "TVS Apache RTR 160", brand: "TVS", price: 115000, mileage: 45, engine: "159.7 cc", fuelType: "Petrol", location: "Chennai", dealer: "TVS Dealership", image: fBike3 },
  { id: 5, name: "Bajaj Pulsar 220F", brand: "Bajaj", price: 85000, mileage: 35, engine: "220 cc", fuelType: "Petrol", location: "Pune", dealer: "Certified Pre-owned", image: fBike4 },
  { id: 6, name: "Hero Splendor Plus", brand: "Hero", price: 70000, mileage: 65, engine: "97.2 cc", fuelType: "Petrol", location: "Gurgaon", dealer: "Hero MotoCorp", image: fBike5 }
];

function readCompareList(): number[] {
  try {
    const raw = localStorage.getItem("compareList");
    const arr = raw ? JSON.parse(raw) : [];
    return Array.isArray(arr) ? arr : [];
  } catch {
    return [];
  }
}

export default function ComparePage() {
  const [compareIds, setCompareIds] = useState<number[]>([]);
  const [selectedAdd, setSelectedAdd] = useState<number[]>([]); // for checkboxes

  useEffect(() => {
    const ids = readCompareList();
    setCompareIds(ids);
    setSelectedAdd(ids);
  }, []);

  const compareProducts = allProducts.filter(p => compareIds.includes(p.id));
  const availableToAdd = allProducts.filter(p => !compareIds.includes(p.id));

  const toggleAdd = (id: number) => {
    setSelectedAdd(prev => prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]);
  };

  const applyAdd = () => {
    // Limit compare count if desired (e.g., 4)
    const merged = Array.from(new Set([...compareIds, ...selectedAdd])).slice(-4);
    localStorage.setItem("compareList", JSON.stringify(merged));
    setCompareIds(merged);
  };

  const removeFromCompare = (id: number) => {
    const filtered = compareIds.filter(x => x !== id);
    localStorage.setItem("compareList", JSON.stringify(filtered));
    setCompareIds(filtered);
    setSelectedAdd(filtered);
  };

  if (compareProducts.length === 0) {
    return (
      <div className="max-w-5xl mx-auto p-6">
        <h2 className="text-2xl font-semibold mb-4">No items to compare</h2>
        <p className="mb-4">Go to a product and click <strong>Compare</strong> to add items, or select below.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {allProducts.map(p => (
            <div key={p.id} className="border rounded p-3 flex items-center gap-3">
              <img src={p.image} alt={p.name} className="w-20 h-16 object-contain" />
              <div>
                <div className="font-semibold">{p.name}</div>
                <div className="text-sm text-gray-600">₹{p.price.toLocaleString()} • {p.brand}</div>
                <div className="mt-2">
                  <Button onClick={() => {
                    const cur = readCompareList();
                    if (!cur.includes(p.id)) cur.push(p.id);
                    localStorage.setItem("compareList", JSON.stringify(cur.slice(-4)));
                    setCompareIds(cur.slice(-4));
                  }}>Compare</Button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-6">
          <Link to="/"><Button variant="outline">Back to Browse</Button></Link>
        </div>
      </div>
    );
  }

  // Build a spec matrix for compareProducts
  const fields = [
    { key: "image", label: "" },
    { key: "name", label: "Model" },
    { key: "brand", label: "Brand" },
    { key: "price", label: "Price" },
    { key: "engine", label: "Engine" },
    { key: "mileage", label: "Mileage / Range" },
    { key: "fuelType", label: "Fuel Type" },
    { key: "location", label: "Location" },
    { key: "dealer", label: "Dealer" }
  ];

  // Helper: check if values differ across products (for highlighting)
  const valuesDiffer = (key: string) => {
    const vals = compareProducts.map(p => (p as any)[key]);
    return new Set(vals.map(v => (v ?? "").toString())).size > 1;
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="flex justify-between items-start mb-6">
        <div>
          <h2 className="text-2xl font-semibold">Compare ({compareProducts.length})</h2>
          <p className="text-sm text-gray-600">Compare specs side-by-side to decide which model suits you best.</p>
        </div>
        <div>
          <Link to="/"><Button variant="outline">Back to Browse</Button></Link>
        </div>
      </div>

      <div className="overflow-x-auto border rounded">
        <table className="w-full table-auto border-collapse">
          <thead>
            <tr>
              <th className="border px-4 py-2 text-left">Specification</th>
              {compareProducts.map(p => (
                <th key={p.id} className="border px-4 py-2 text-left">
                  <div className="flex items-center justify-between gap-2">
                    <div>
                      <div className="font-semibold">{p.name}</div>
                      <div className="text-sm text-gray-600">₹{p.price.toLocaleString()}</div>
                    </div>
                    <div>
                      <button onClick={() => removeFromCompare(p.id)} className="text-sm text-red-600">Remove</button>
                    </div>
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {fields.map(field => (
              <tr key={field.key} className={`border-t ${valuesDiffer(field.key) ? "" : "bg-white"}`}>
                <td className="border px-4 py-3 font-medium">{field.label || ""}</td>
                {compareProducts.map(p => {
                  let cell: any = (p as any)[field.key];
                  if (field.key === "image") {
                    cell = <img src={p.image} alt={p.name} className="w-32 h-20 object-contain" />;
                  } else if (field.key === "price") {
                    cell = `₹${p.price.toLocaleString()}`;
                  } else if (field.key === "mileage") {
                    // Show km/l or km for electric
                    cell = p.fuelType.toLowerCase() === "electric" ? `${p.mileage} km` : `${p.mileage} km/l`;
                  }
                  const highlight = valuesDiffer(field.key) ? "bg-yellow-50" : "";
                  return (
                    <td key={p.id} className={`border px-4 py-3 align-top ${highlight}`}>
                      {cell}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Add / modify compare list */}
      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="md:col-span-2">
          <h3 className="font-semibold mb-2">Add more models to compare</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {availableToAdd.map(p => (
              <label key={p.id} className="flex items-center gap-3 border rounded p-3">
                <input
                  type="checkbox"
                  checked={selectedAdd.includes(p.id)}
                  onChange={() => toggleAdd(p.id)}
                />
                <img src={p.image} alt={p.name} className="w-16 h-12 object-contain" />
                <div>
                  <div className="font-medium">{p.name}</div>
                  <div className="text-sm text-gray-600">₹{p.price.toLocaleString()}</div>
                </div>
              </label>
            ))}
          </div>
          <div className="mt-3 flex gap-2">
            <Button onClick={applyAdd}>Apply</Button>
            <Button variant="outline" onClick={() => {
              // clear compare
              localStorage.removeItem("compareList");
              setCompareIds([]);
            }}>Clear All</Button>
          </div>
        </div>

        <div className="border rounded p-3">
          <h4 className="font-semibold mb-2">Currently comparing</h4>
          <ul className="space-y-2">
            {compareProducts.map(p => (
              <li key={p.id} className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img src={p.image} alt={p.name} className="w-12 h-10 object-contain" />
                  <div>
                    <div className="font-medium">{p.name}</div>
                    <div className="text-xs text-gray-600">{p.brand}</div>
                  </div>
                </div>
                <button className="text-red-600 text-sm" onClick={() => removeFromCompare(p.id)}>Remove</button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
