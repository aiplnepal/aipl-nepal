"use client";

import { useState, useMemo, useCallback } from "react";
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

interface LocationSelectorProps {
  onProvinceChange: (val: string) => void;
  onDistrictChange: (val: string) => void;
  onMunicipalityChange: (val: string) => void;
  onWardChange: (val: string) => void;
  errors?: {
    province?: { message?: string };
    district?: { message?: string };
    municipality?: { message?: string };
    ward?: { message?: string };
  };
}

export function LocationSelector({
  onProvinceChange,
  onDistrictChange,
  onMunicipalityChange,
  onWardChange,
  errors,
}: LocationSelectorProps) {
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

  const handleProvinceChange = useCallback(
    (val: unknown) => {
      const v = String(val);
      const prov = allProvinces.find((p) => p.id === Number(v));
      setProvinceId(Number(v));
      setDistrictId(null);
      setMunicipalityId(null);
      setDistrictKey((k) => k + 1);
      setMunicipalityKey((k) => k + 1);
      setWardKey((k) => k + 1);
      onProvinceChange(prov?.name ?? v);
      onDistrictChange("");
      onMunicipalityChange("");
      onWardChange("");
    },
    [allProvinces, onProvinceChange, onDistrictChange, onMunicipalityChange, onWardChange],
  );

  const handleDistrictChange = useCallback(
    (val: unknown) => {
      const v = String(val);
      const dist = districts.find((d) => d.id === Number(v));
      setDistrictId(Number(v));
      setMunicipalityId(null);
      setMunicipalityKey((k) => k + 1);
      setWardKey((k) => k + 1);
      onDistrictChange(dist?.name ?? v);
      onMunicipalityChange("");
      onWardChange("");
    },
    [districts, onDistrictChange, onMunicipalityChange, onWardChange],
  );

  const handleMunicipalityChange = useCallback(
    (val: unknown) => {
      const v = String(val);
      const mun = municipalities.find((m) => m.id === Number(v));
      setMunicipalityId(Number(v));
      setWardKey((k) => k + 1);
      onMunicipalityChange(mun?.name ?? v);
      onWardChange("");
    },
    [municipalities, onMunicipalityChange, onWardChange],
  );

  const handleWardChange = useCallback(
    (val: unknown) => {
      onWardChange(String(val));
    },
    [onWardChange],
  );

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
      <div>
        <Label className="text-sm font-medium text-ink mb-1.5 block">Province</Label>
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
        {errors?.province && (
          <p className="text-sm text-[#C45A3C] mt-1">{errors.province.message}</p>
        )}
      </div>

      <div>
        <Label className="text-sm font-medium text-ink mb-1.5 block">District</Label>
        <Select
          key={`district-${districtKey}`}
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
        {errors?.district && (
          <p className="text-sm text-[#C45A3C] mt-1">{errors.district.message}</p>
        )}
      </div>

      <div>
        <Label className="text-sm font-medium text-ink mb-1.5 block">Local Level</Label>
        <Select
          key={`municipality-${municipalityKey}`}
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
        {errors?.municipality && (
          <p className="text-sm text-[#C45A3C] mt-1">{errors.municipality.message}</p>
        )}
      </div>

      <div>
        <Label className="text-sm font-medium text-ink mb-1.5 block">Ward</Label>
        <Select
          key={`ward-${wardKey}`}
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
        {errors?.ward && (
          <p className="text-sm text-[#C45A3C] mt-1">{errors.ward.message}</p>
        )}
      </div>
    </div>
  );
}
