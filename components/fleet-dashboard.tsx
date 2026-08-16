import { Icon } from "./icon";

const assets = [
  { name: "Print Cell 04", type: "3D printer", status: "Printing", tone: "running", detail: "gearbox.gcode · 72%" },
  { name: "Haas VF-2", type: "CNC mill", status: "Running", tone: "running", detail: "OP1234.NC · T04" },
  { name: "Laser 02", type: "Laser cutter", status: "Attention", tone: "attention", detail: "Exhaust threshold" },
  { name: "Bridgeport 01", type: "Legacy mill", status: "Idle", tone: "idle", detail: "Last active 18m ago" },
];

export function FleetDashboard() {
  return (
    <div className="dashboard-shell" aria-label="Finite Machines fleet dashboard preview">
      <div className="dashboard-topbar">
        <div>
          <span className="dashboard-eyebrow">Engineering Fabrication Lab</span>
          <strong>Fleet overview</strong>
        </div>
        <div className="live-pill"><span /> Live</div>
      </div>

      <div className="metric-grid">
        <div className="metric-card"><span>Assets</span><strong>43</strong><small>Across 4 categories</small></div>
        <div className="metric-card"><span>Running</span><strong>18</strong><small className="positive">+4 since 8:00</small></div>
        <div className="metric-card"><span>Idle</span><strong>14</strong><small>Available now</small></div>
        <div className="metric-card"><span>Attention</span><strong>3</strong><small className="warning">Needs review</small></div>
      </div>

      <div className="dashboard-body">
        <div className="utilization-panel">
          <div className="panel-heading">
            <div><span>Runtime</span><strong>This week</strong></div>
            <div className="change"><Icon name="trend" size={14} /> 8.4%</div>
          </div>
          <div className="chart" aria-label="Weekly machine runtime bar chart">
            {[42, 64, 51, 78, 68, 86, 59].map((height, index) => (
              <div className="bar-column" key={index}>
                <div className="bar-track"><div className="bar" style={{ height: `${height}%` }} /></div>
                <span>{["M", "T", "W", "T", "F", "S", "S"][index]}</span>
              </div>
            ))}
          </div>
          <div className="runtime-total"><strong>467.2h</strong><span>productive runtime</span></div>
        </div>

        <div className="assets-panel">
          <div className="panel-heading"><div><span>Assets</span><strong>Recent activity</strong></div><button type="button" tabIndex={-1}>View all</button></div>
          <div className="asset-list">
            {assets.map((asset) => (
              <div className="asset-row" key={asset.name}>
                <span className={`asset-icon ${asset.tone}`}><Icon name="gauge" size={16} /></span>
                <div className="asset-name"><strong>{asset.name}</strong><span>{asset.type}</span></div>
                <div className="asset-detail"><strong className={asset.tone}>{asset.status}</strong><span>{asset.detail}</span></div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="dashboard-glow" />
    </div>
  );
}
