"use client";

import { useState } from "react";

const machines = {
  printer: {
    tab: "3D printer",
    name: "Print Cell 04",
    type: "Prusa MK4 · Additive Lab",
    state: "PRINTING",
    operationLabel: "Current print",
    operation: "gearbox-housing.gcode",
    progress: 72,
    primary: [{ label: "Elapsed", value: "1h 14m" }, { label: "Remaining", value: "28m" }],
    telemetry: [{ label: "Nozzle", value: "215°C" }, { label: "Bed", value: "60°C" }, { label: "Prints today", value: "8" }],
  },
  cnc: {
    tab: "CNC mill",
    name: "Haas VF-2",
    type: "CNC mill · Machine Shop",
    state: "RUNNING",
    operationLabel: "Current program",
    operation: "OP1234.NC",
    progress: 58,
    primary: [{ label: "Cycle time", value: "18:42" }, { label: "Tool", value: "T04" }],
    telemetry: [{ label: "Spindle", value: "8,500 RPM" }, { label: "Load", value: "42%" }, { label: "Feed", value: "887 mm/min" }],
  },
  legacy: {
    tab: "Legacy mill",
    name: "Bridgeport 01",
    type: "Retrofit sensor · Manual Shop",
    state: "RUNNING",
    operationLabel: "Inferred operation",
    operation: "Current + vibration",
    progress: 94,
    primary: [{ label: "Runtime today", value: "2h 31m" }, { label: "Confidence", value: "94%" }],
    telemetry: [{ label: "Current draw", value: "8.4 A" }, { label: "Vibration", value: "Normal" }, { label: "Maintenance", value: "73h ago" }],
  },
} as const;

type MachineKey = keyof typeof machines;

export function MachineTabs() {
  const [active, setActive] = useState<MachineKey>("printer");
  const machine = machines[active];

  return (
    <div className="machine-demo">
      <div className="machine-tabs" role="tablist" aria-label="Example machine details">
        {(Object.keys(machines) as MachineKey[]).map((key) => (
          <button
            key={key}
            type="button"
            role="tab"
            aria-selected={active === key}
            onClick={() => setActive(key)}
          >
            {machines[key].tab}
          </button>
        ))}
      </div>

      <div className="machine-screen" role="tabpanel">
        <div className="machine-screen-header">
          <div><span>{machine.type}</span><h3>{machine.name}</h3></div>
          <span className="state-badge"><i /> {machine.state}</span>
        </div>
        <div className="machine-operation">
          <span>{machine.operationLabel}</span>
          <strong>{machine.operation}</strong>
          <div className="progress-line"><span style={{ width: `${machine.progress}%` }} /></div>
          <em>{machine.progress}%</em>
        </div>
        <div className="machine-stat-grid primary">
          {machine.primary.map((item) => <div key={item.label}><span>{item.label}</span><strong>{item.value}</strong></div>)}
        </div>
        <div className="machine-stat-grid telemetry">
          {machine.telemetry.map((item) => <div key={item.label}><span>{item.label}</span><strong>{item.value}</strong></div>)}
        </div>
        <div className="event-stream">
          <span>Latest event</span><p><i /> State changed from IDLE to RUNNING</p><time>12:42:08</time>
        </div>
      </div>
    </div>
  );
}
