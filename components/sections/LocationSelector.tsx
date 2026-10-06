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
  dict?: any;
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
  dict,
  onProvinceChange,
  onDistrictChange,
  onMunicipalityChange,
  onWardChange,
  errors,
}: LocationSelectorProps) {
  const [provinceId, setProvinceId] = useState<number | null>(null);
  const [districtId, setDistrictId] = useState<number | null>(null);
  const [municipalityId, setMunicipalityId] = useState<number | null>(null);
  const [wardId, setWardId] = useState<string>("");

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
      setWardId("");
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
      setWardId("");
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
      setWardId("");
      setWardKey((k) => k + 1);
      onMunicipalityChange(mun?.name ?? v);
      onWardChange("");
    },
    [municipalities, onMunicipalityChange, onWardChange],
  );

  const handleWardChange = useCallback(
    (val: unknown) => {
      setWardId(String(val));
      onWardChange(String(val));
    },
    [onWardChange],
  );

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
      <div>
        <Label className="text-sm font-medium text-gray-900 mb-1.5 block">{dict?.common?.locationSelector?.province || "Province"}</Label>
        <Select value={provinceId ? String(provinceId) : undefined} onValueChange={handleProvinceChange}>
          <SelectTrigger className="focus:ring-forest" aria-invalid={!!errors?.province} aria-describedby={errors?.province ? "province-error" : undefined}>
            <SelectValue className="truncate" placeholder={dict?.common?.locationSelector?.selectProvince || "Select province"} />
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
          <p id="province-error" className="text-sm text-red-500 mt-1">{errors.province.message}</p>
        )}
      </div>

      <div>
        <Label className="text-sm font-medium text-gray-900 mb-1.5 block">{dict?.common?.locationSelector?.district || "District"}</Label>
        <Select
          value={districtId ? String(districtId) : undefined}
          disabled={!provinceId}
          onValueChange={handleDistrictChange}
        >
          <SelectTrigger className="focus:ring-forest" aria-invalid={!!errors?.district} aria-describedby={errors?.district ? "district-error" : undefined}>
            <SelectValue className="truncate" placeholder={provinceId ? (dict?.common?.locationSelector?.selectDistrict || "Select district") : (dict?.common?.locationSelector?.selectProvinceFirst || "Select province first")} />
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
          <p id="district-error" className="text-sm text-red-500 mt-1">{errors.district.message}</p>
        )}
      </div>

      <div>
        <Label className="text-sm font-medium text-gray-900 mb-1.5 block">{dict?.common?.locationSelector?.localLevel || "Local Level"}</Label>
        <Select
          value={municipalityId ? String(municipalityId) : undefined}
          disabled={!districtId}
          onValueChange={handleMunicipalityChange}
        >
          <SelectTrigger className="focus:ring-forest" aria-invalid={!!errors?.municipality} aria-describedby={errors?.municipality ? "municipality-error" : undefined}>
            <SelectValue className="truncate" placeholder={districtId ? (dict?.common?.locationSelector?.selectLocalLevel || "Select local level") : (dict?.common?.locationSelector?.selectDistrictFirst || "Select district first")} />
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
          <p id="municipality-error" className="text-sm text-red-500 mt-1">{errors.municipality.message}</p>
        )}
      </div>

      <div>
        <Label className="text-sm font-medium text-gray-900 mb-1.5 block">{dict?.common?.locationSelector?.ward || "Ward"}</Label>
        <Select
          value={wardId ? String(wardId) : undefined} 
          disabled={!municipalityId}
          onValueChange={handleWardChange}
        >
          <SelectTrigger className="focus:ring-forest" aria-invalid={!!errors?.ward} aria-describedby={errors?.ward ? "ward-error" : undefined}>
            <SelectValue className="truncate" placeholder={municipalityId ? (dict?.common?.locationSelector?.selectWard || "Select ward") : (dict?.common?.locationSelector?.selectLocalLevelFirst || "Select local level first")} />
          </SelectTrigger>
          <SelectContent>
            {wards.map((w) => (
              <SelectItem key={w} value={String(w)}>
                {dict?.common?.locationSelector?.wardPrefix || "Ward "}{w}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        {errors?.ward && (
          <p id="ward-error" className="text-sm text-red-500 mt-1">{errors.ward.message}</p>
        )}
      </div>
    </div>
  );
}
