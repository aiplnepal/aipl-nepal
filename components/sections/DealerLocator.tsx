"use client";

import { useState, useMemo, useCallback } from "react";
import { MapPin, Phone, Mail, Search } from "lucide-react";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  getProvinces,
  getDistricts,
  getMunicipalities,
  getWards,
} from "@/lib/nepal-locations";
import { AnimateIn } from "./AnimateIn";
import type { Dealer } from "@/lib/types";

interface DealerLocatorProps {
  dealers: Dealer[];
}

export function DealerLocator({ dealers }: DealerLocatorProps) {
  const [selectedProvince, setSelectedProvince] = useState("");
  const [selectedDistrict, setSelectedDistrict] = useState("");
  const [selectedMunicipality, setSelectedMunicipality] = useState("");
  const [selectedWard, setSelectedWard] = useState("");

  const [provinceId, setProvinceId] = useState<number | null>(null);
  const [districtId, setDistrictId] = useState<number | null>(null);
  const [municipalityId, setMunicipalityId] = useState<number | null>(null);

  const [districtKey, setDistrictKey] = useState(0);
  const [municipalityKey, setMunicipalityKey] = useState(0);
  const [wardKey, setWardKey] = useState(0);

  const allProvinces = getProvinces();

  const districts = useMemo(
    () => (provinceId ? getDistricts(provinceId) : []),
    [provinceId],
  );

  const municipalities = useMemo(
    () => (districtId ? getMunicipalities(districtId) : []),
    [districtId],
  );

  const wards = useMemo(
    () => (municipalityId ? getWards(municipalityId) : []),
    [municipalityId],
  );

  const filteredDealers = useMemo(() => {
    return dealers.filter((d) => {
      if (selectedProvince && d.province !== selectedProvince) return false;
      if (selectedDistrict && d.district !== selectedDistrict) return false;
      if (selectedMunicipality && d.municipality !== selectedMunicipality) return false;
      if (selectedWard && d.ward !== Number(selectedWard)) return false;
      return true;
    });
  }, [dealers, selectedProvince, selectedDistrict, selectedMunicipality, selectedWard]);

  const hasFilters = selectedProvince || selectedDistrict || selectedMunicipality || selectedWard;
  const isFullySelected = selectedProvince && selectedDistrict && selectedMunicipality && selectedWard;

  const handleProvinceChange = useCallback(
    (val: unknown) => {
      const v = String(val);
      const prov = allProvinces.find((p) => p.id === Number(v));
      setProvinceId(Number(v));
      setDistrictId(null);
      setMunicipalityId(null);
      setSelectedProvince(prov?.name ?? "");
      setSelectedDistrict("");
      setSelectedMunicipality("");
      setSelectedWard("");
      setDistrictKey((k) => k + 1);
      setMunicipalityKey((k) => k + 1);
      setWardKey((k) => k + 1);
    },
    [allProvinces],
  );

  const handleDistrictChange = useCallback(
    (val: unknown) => {
      const v = String(val);
      const dist = districts.find((d) => d.id === Number(v));
      setDistrictId(Number(v));
      setMunicipalityId(null);
      setSelectedDistrict(dist?.name ?? "");
      setSelectedMunicipality("");
      setSelectedWard("");
      setMunicipalityKey((k) => k + 1);
      setWardKey((k) => k + 1);
    },
    [districts],
  );

  const handleMunicipalityChange = useCallback(
    (val: unknown) => {
      const v = String(val);
      const mun = municipalities.find((m) => m.id === Number(v));
      setMunicipalityId(Number(v));
      setSelectedMunicipality(mun?.name ?? "");
      setSelectedWard("");
      setWardKey((k) => k + 1);
    },
    [municipalities],
  );

  const handleWardChange = useCallback((val: unknown) => {
    setSelectedWard(String(val));
  }, []);

  const clearFilters = useCallback(() => {
    setProvinceId(null);
    setDistrictId(null);
    setMunicipalityId(null);
    setSelectedProvince("");
    setSelectedDistrict("");
    setSelectedMunicipality("");
    setSelectedWard("");
    setDistrictKey((k) => k + 1);
    setMunicipalityKey((k) => k + 1);
    setWardKey((k) => k + 1);
  }, []);

  return (
    <section id="dealers" className="bg-forest/5 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6">
        <AnimateIn>
          <div className="text-center mb-12">
            <p className="text-forest uppercase tracking-[0.2em] text-sm font-semibold mb-3">
              Find a Dealer
            </p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-900">
              Our Dealer Network
            </h2>
            <p className="text-gray-500 mt-3 max-w-lg mx-auto">
              Select your location to find AIPL dealers near you.
            </p>
          </div>
        </AnimateIn>

        <AnimateIn delay={0.1}>
          <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-border mb-10">
            <div className="flex items-center gap-2 mb-6">
              <Search className="h-5 w-5 text-forest" />
              <h3 className="font-heading text-lg font-bold text-gray-900">
                Search by Location
              </h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div>
                <Label className="text-sm font-medium text-gray-900 mb-1.5 block">Province</Label>
                <Select onValueChange={handleProvinceChange}>
                  <SelectTrigger className="focus:ring-forest">
                    <SelectValue placeholder="Select province" />
                  </SelectTrigger>
                  <SelectContent>
                    {allProvinces.map((p) => (
                      <SelectItem key={p.id} value={String(p.id)}>
                        {p.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label className="text-sm font-medium text-gray-900 mb-1.5 block">District</Label>
                <Select
                  key={`d-dealer-${districtKey}`}
                  disabled={!provinceId}
                  onValueChange={handleDistrictChange}
                >
                  <SelectTrigger className="focus:ring-forest">
                    <SelectValue placeholder={provinceId ? "Select district" : "Select province first"} />
                  </SelectTrigger>
                  <SelectContent>
                    {districts.map((d) => (
                      <SelectItem key={d.id} value={String(d.id)}>
                        {d.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label className="text-sm font-medium text-gray-900 mb-1.5 block">Local Level</Label>
                <Select
                  key={`m-dealer-${municipalityKey}`}
                  disabled={!districtId}
                  onValueChange={handleMunicipalityChange}
                >
                  <SelectTrigger className="focus:ring-forest">
                    <SelectValue placeholder={districtId ? "Select local level" : "Select district first"} />
                  </SelectTrigger>
                  <SelectContent>
                    {municipalities.map((m) => (
                      <SelectItem key={m.id} value={String(m.id)}>
                        {m.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label className="text-sm font-medium text-gray-900 mb-1.5 block">Ward</Label>
                <Select
                  key={`w-dealer-${wardKey}`}
                  disabled={!municipalityId}
                  onValueChange={handleWardChange}
                >
                  <SelectTrigger className="focus:ring-forest">
                    <SelectValue placeholder={municipalityId ? "Select ward" : "Select local level first"} />
                  </SelectTrigger>
                  <SelectContent>
                    {wards.map((w) => (
                      <SelectItem key={w} value={String(w)}>
                        Ward {w}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            {hasFilters && (
              <button
                onClick={clearFilters}
                className="mt-4 text-sm text-forest hover:text-forest-dark font-medium transition-colors"
              >
                Clear all filters
              </button>
            )}
          </div>
        </AnimateIn>

        {/* PLACEHOLDER: confirm with AIPL before launch — these are placeholder dealer locations pending the client's actual dealer list */}
        {!isFullySelected ? (
          <div className="bg-white rounded-2xl p-12 text-center border border-border shadow-sm">
            <div className="w-16 h-16 rounded-full bg-forest/5 flex items-center justify-center mx-auto mb-4">
              <MapPin className="h-7 w-7 text-forest/60" />
            </div>
            <h3 className="font-heading text-xl font-bold text-gray-900 mb-2">
              Find Your Local Dealer
            </h3>
            <p className="text-gray-500 max-w-md mx-auto">
              Please complete all selections above (Province, District, Local Level, and Ward) to reveal the authorized AIPL dealer in your specific area.
            </p>
          </div>
        ) : filteredDealers.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredDealers.map((dealer, i) => (
              <AnimateIn key={dealer.id} delay={i * 0.05}>
                <div className="bg-white rounded-xl p-6 border border-border h-full hover:shadow-md transition-shadow">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-forest flex items-center justify-center shrink-0">
                      <MapPin className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-heading text-lg font-bold text-gray-900">
                        {dealer.name}
                      </h3>
                      <p className="text-forest text-sm font-medium">
                        {dealer.district}, {dealer.province}
                      </p>
                    </div>
                  </div>
                  <div className="space-y-2.5 text-sm text-gray-900 border-t border-border pt-4">
                    <div className="flex items-start gap-2.5">
                      <MapPin className="h-4 w-4 text-gray-500 shrink-0 mt-0.5" />
                      <span>
                        Ward {dealer.ward}, {dealer.municipality}, {dealer.district}
                      </span>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <Phone className="h-4 w-4 text-gray-500 shrink-0" />
                      <span>{dealer.phone}</span>
                    </div>
                    {dealer.email && (
                      <div className="flex items-center gap-2.5">
                        <Mail className="h-4 w-4 text-gray-500 shrink-0" />
                        <span>{dealer.email}</span>
                      </div>
                    )}
                  </div>
                </div>
              </AnimateIn>
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-2xl p-12 text-center border border-border">
            <div className="w-16 h-16 rounded-full bg-forest/5 flex items-center justify-center mx-auto mb-4">
              <MapPin className="h-7 w-7 text-gray-500" />
            </div>
            <h3 className="font-heading text-xl font-bold text-gray-900 mb-2">
              No Dealers Found
            </h3>
            <p className="text-gray-500 max-w-md mx-auto">
              We don&apos;t have a dealer in this exact location yet. Try broadening
              your search or contact us directly for assistance.
            </p>
            {hasFilters && (
              <button
                onClick={clearFilters}
                className="mt-4 text-sm text-forest hover:text-forest-dark font-medium transition-colors"
              >
                Clear filters to search again
              </button>
            )}
          </div>
        )}

        {hasFilters && filteredDealers.length > 0 && (
          <p className="text-center text-gray-500 text-sm mt-6">
            Showing {filteredDealers.length} dealer{filteredDealers.length !== 1 ? "s" : ""} in{" "}
            {selectedMunicipality || selectedDistrict || selectedProvince}
          </p>
        )}
      </div>
    </section>
  );
}
