import { FleetDashboard } from "@/components/fleet-dashboard";
import { Header } from "@/components/header";
import { Icon } from "@/components/icon";
import { Logo } from "@/components/logo";
import { MachineTabs } from "@/components/machine-tabs";
import { PilotForm } from "@/components/pilot-form";

const features = [
  { icon: "eye" as const, title: "Live operations", text: "See which machines are running, idle, paused, offline, or in an error state." },
  { icon: "gauge" as const, title: "True utilization", text: "Understand productive runtime by asset, machine type, area, and time period." },
  { icon: "clock" as const, title: "Downtime", text: "See how long equipment remains unavailable and build a clear operating history." },
  { icon: "trend" as const, title: "Failure history", text: "Identify recurring failures and the machines that require the most attention." },
  { icon: "maintenance" as const, title: "Maintenance rules", text: "Trigger maintenance from actual operating hours, events, and configured thresholds." },
  { icon: "report" as const, title: "Operational reports", text: "Turn machine activity into evidence for staffing, maintenance, and purchasing decisions." },
];

const machineTypes = [
  { label: "3D printers", detail: "OctoPrint, Moonraker, PrusaLink", tag: "Initial focus", icon: "cube" },
  { label: "CNC machines", detail: "MTConnect, OPC UA, Modbus", tag: "Planned expansion", icon: "cnc" },
  { label: "Laser cutters", detail: "Native data and operating signals", tag: "Planned expansion", icon: "laser" },
  { label: "Legacy equipment", detail: "Current, vibration, digital inputs", tag: "Retrofit approach", icon: "legacy" },
];

function MachineGlyph({ name }: { name: string }) {
  return (
    <svg className="machine-glyph" aria-hidden="true" viewBox="0 0 56 56" fill="none">
      {name === "cube" && <><path d="m28 8 18 10v20L28 48 10 38V18L28 8Z"/><path d="m10 18 18 10 18-10M28 28v20"/><path d="m19 13 18 10"/></>}
      {name === "cnc" && <><rect x="8" y="10" width="40" height="36" rx="3"/><path d="M14 17h20v17H14zM39 17h4M39 23h4M39 29h4M16 41h26"/><path d="m20 27 4-5 5 7"/></>}
      {name === "laser" && <><path d="M11 39h34v8H11zM16 31h24l5 8H11l5-8Z"/><path d="M28 8v18M23 15h10M25 26h6"/><circle cx="28" cy="27" r="2"/></>}
      {name === "legacy" && <><path d="M11 46h34M15 46V26h26v20M20 26V14h16v12M24 14V9h8v5"/><path d="M21 32h14v8H21zM39 19h7v17h-5"/></>}
    </svg>
  );
}

export default function Home() {
  return (
    <main id="top">
      <Header />

      <section className="hero section-dark">
        <div className="hero-grid-pattern" />
        <div className="container hero-grid">
          <div className="hero-copy reveal">
            <div className="eyebrow"><span /> Equipment intelligence for fabrication labs</div>
            <h1>Make every machine <em>observable.</em></h1>
            <p className="hero-lede">Finite Machines connects printers, CNCs, lasers, mills, and legacy equipment—turning incompatible machine signals into one operational view.</p>
            <div className="hero-actions">
              <a className="button" href="#pilot">Request a pilot <Icon name="arrow" size={17} /></a>
              <a className="text-link" href="#how-it-works">See how it works <span aria-hidden="true">↓</span></a>
            </div>
            <div className="hero-proof">
              <div><Icon name="shield" size={17} /><span>Read-only by default</span></div>
              <div><Icon name="network" size={17} /><span>Local edge architecture</span></div>
              <div><Icon name="database" size={17} /><span>Offline buffering</span></div>
            </div>
          </div>
          <div className="hero-visual reveal delay-1"><FleetDashboard /></div>
        </div>
        <div className="container protocol-strip" aria-label="Example connection methods">
          <span>Connect through</span>
          <div>OctoPrint</div><i /><div>MTConnect</div><i /><div>OPC UA</div><i /><div>Modbus</div><i /><div>Retrofit sensors</div>
        </div>
      </section>

      <section className="section problem-section" id="product">
        <div className="container">
          <div className="section-intro split-intro">
            <div><span className="section-number">01 / THE PROBLEM</span><h2>Your machines speak different languages.</h2></div>
            <p>A fabrication lab may have modern APIs, industrial protocols, proprietary interfaces, and equipment with no software interface at all. The result is fragmented visibility into usage, downtime, failures, and maintenance.</p>
          </div>

          <div className="translation-diagram">
            <div className="signal-sources">
              {["OctoPrint", "MTConnect", "OPC UA", "Modbus", "Sensor signals"].map((item, index) => (
                <div className="source-row" key={item}><span>0{index + 1}</span><strong>{item}</strong><i /></div>
              ))}
            </div>
            <div className="translation-core"><div className="core-rings"><span><Logo compact /></span></div><strong>FINITE</strong><small>Normalize</small></div>
            <div className="normalized-output">
              <span className="micro-label">ONE OPERATIONAL MODEL</span>
              <div className="state-row"><i className="state running" /> RUNNING <small>Native: Printing / ACTIVE</small></div>
              <div className="output-grid"><div><span>Runtime</span><strong>467.2h</strong></div><div><span>Availability</span><strong>96.4%</strong></div><div><span>Operations</span><strong>1,284</strong></div><div><span>Events</span><strong>8,921</strong></div></div>
            </div>
          </div>
        </div>
      </section>

      <section className="section features-section">
        <div className="container">
          <div className="section-intro centered-intro"><span className="section-number">02 / ONE OPERATIONAL VIEW</span><h2>Know what is happening across your lab.</h2><p>Finite Machines is built to answer operational questions—not simply display telemetry.</p></div>
          <div className="feature-grid">
            {features.map((feature, index) => (
              <article className="feature-card" key={feature.title}>
                <div className="feature-icon"><Icon name={feature.icon} size={22} /></div>
                <span className="card-index">0{index + 1}</span>
                <h3>{feature.title}</h3><p>{feature.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section machines-section" id="machines">
        <div className="container">
          <div className="section-intro split-intro compact"><div><span className="section-number">03 / MIXED FLEET</span><h2>One platform.<br />Different machines.</h2></div><p>Use the richest source each asset can provide: a native API, an industrial protocol, or calibrated retrofit sensing. The interface adapts to each machine&apos;s actual capabilities.</p></div>
          <div className="machine-type-grid">
            {machineTypes.map((machine) => (
              <article className="machine-type-card" key={machine.label}>
                <div className="machine-illustration"><MachineGlyph name={machine.icon} /></div>
                <span className="machine-tag">{machine.tag}</span><h3>{machine.label}</h3><p>{machine.detail}</p>
              </article>
            ))}
          </div>
          <div className="capability-note"><Icon name="layers" size={19} /><p><strong>Capability-aware by design.</strong> A CNC can expose spindle load while a legacy mill may expose only state and runtime. Finite preserves those differences without losing a common operational core.</p></div>
        </div>
      </section>

      <section className="section section-dark how-section" id="how-it-works">
        <div className="container">
          <div className="section-intro light centered-intro"><span className="section-number">04 / HOW IT WORKS</span><h2>From machine signals to operational intelligence.</h2></div>
          <div className="architecture-flow">
            <article><span className="flow-number">01</span><div className="flow-icon"><Icon name="network" size={25} /></div><h3>Connect</h3><p>Finite Adapters connect to machine APIs, industrial protocols, and retrofit sensors.</p><small>FINITE ADAPTERS</small></article>
            <div className="flow-arrow"><Icon name="arrow" /></div>
            <article><span className="flow-number">02</span><div className="flow-icon"><Icon name="layers" size={25} /></div><h3>Normalize</h3><p>Finite Edge translates machine-native data into one common operational model.</p><small>FINITE EDGE</small></article>
            <div className="flow-arrow"><Icon name="arrow" /></div>
            <article><span className="flow-number">03</span><div className="flow-icon"><Icon name="cloud" size={25} /></div><h3>Understand</h3><p>Finite Cloud turns operating history into dashboards, maintenance, alerts, and reports.</p><small>FINITE CLOUD</small></article>
          </div>
          <div className="architecture-caption"><span>Machines</span><i /><span>Adapters</span><i /><span>Edge</span><i /><span>Secure outbound data</span><i /><span>Cloud & dashboard</span></div>
        </div>
      </section>

      <section className="section machine-detail-section">
        <div className="container machine-detail-grid">
          <div className="machine-detail-copy">
            <span className="section-number">05 / CAPABILITY-AWARE UI</span>
            <h2>Every asset gets the detail it deserves.</h2>
            <p>Every machine shares a common header—state, runtime, availability, events, and connector health. Below it, the interface adapts to the data that asset can actually expose.</p>
            <ul className="check-list">
              <li><Icon name="check" size={17} /> Preserve the original machine state</li>
              <li><Icon name="check" size={17} /> Normalize operations across equipment types</li>
              <li><Icon name="check" size={17} /> Show confidence for inferred states</li>
            </ul>
          </div>
          <MachineTabs />
        </div>
      </section>

      <section className="section decisions-section">
        <div className="container decisions-grid">
          <div className="decision-card decision-heading"><span className="section-number">06 / MANAGEMENT VALUE</span><h2>Machine data that helps you make decisions.</h2><p>Build a defensible view of what your facility delivers—and what it needs next.</p></div>
          {[
            ["Which assets are underutilized?", "Compare runtime and availability across machine types."],
            ["What needs attention today?", "Surface downtime, recurring errors, and maintenance rules."],
            ["Do we need another machine?", "Support equipment requests with operating history."],
            ["Where is staff time going?", "Find the equipment creating repeated operational friction."],
          ].map(([question, answer], index) => <article className="decision-card" key={question}><span>0{index + 1}</span><h3>{question}</h3><p>{answer}</p><Icon name="arrow" size={18} /></article>)}
        </div>
      </section>

      <section className="section security-section" id="security">
        <div className="container security-grid">
          <div className="security-visual">
            <div className="lab-boundary"><span className="boundary-label">YOUR LAB NETWORK</span><div className="boundary-machines"><span>PRINTER</span><span>CNC</span><span>LASER</span></div><div className="edge-device"><Logo compact /><div><strong>FINITE EDGE</strong><small>Local gateway</small></div></div><div className="buffer-line"><span /><span /><span /><small>Encrypted local buffer</small></div></div>
            <div className="outbound-line"><i /><span>Secure outbound communication</span><Icon name="arrow" size={18} /></div>
            <div className="cloud-node"><Icon name="cloud" size={30} /><strong>FINITE CLOUD</strong></div>
          </div>
          <div className="security-copy">
            <span className="section-number">07 / ARCHITECTURE & SAFETY</span><h2>Built for real lab networks.</h2><p>Observability should not require opening inbound access to every machine or adding remote control where it does not belong.</p>
            <div className="security-list">
              <div><Icon name="shield" size={20} /><span><strong>Read-only by default</strong><small>Observe equipment without starting jobs, moving axes, or changing machine parameters.</small></span></div>
              <div><Icon name="download" size={20} /><span><strong>Outbound-first communication</strong><small>Finite Edge sends normalized data securely from inside the facility.</small></span></div>
              <div><Icon name="database" size={20} /><span><strong>Offline tolerant</strong><small>Buffer locally through connectivity interruptions and resume upload after reconnection.</small></span></div>
              <div><Icon name="eye" size={20} /><span><strong>Machine data first</strong><small>Focus on assets and operations without depending on student identity.</small></span></div>
            </div>
          </div>
        </div>
      </section>

      <section className="section integrate-section">
        <div className="container integrate-grid">
          <div><span className="section-number">08 / FITS YOUR STACK</span><h2>Integrates.<br />Doesn&apos;t replace.</h2></div>
          <div className="integrate-copy"><p>Finite Machines is designed to become the equipment-data layer underneath the systems your facility already uses—not another platform that tries to own every workflow.</p><div className="integration-tags"><span>Makerspace systems</span><span>Maintenance platforms</span><span>Data warehouses</span><span>Institutional reporting</span><span>External dashboards</span><span>Operations systems</span></div><div className="not-list"><strong>Focused by design</strong><span>Not a slicer</span><span>Not a booking platform</span><span>Not a full CMMS</span><span>Not a SCADA or MES replacement</span></div><p className="muted-note">Future interfaces may include APIs, webhooks, and data exports as integrations are validated.</p></div>
        </div>
      </section>

      <section className="pilot-section" id="pilot">
        <div className="container pilot-grid">
          <div className="pilot-copy"><span className="pilot-kicker"><i /> DESIGN PARTNER PROGRAM</span><h2>Help us make your lab observable.</h2><p>We&apos;re working with fabrication facilities to build the adapter library and operational platform mixed-machine environments actually need.</p><div className="pilot-fit"><strong>A strong fit looks like:</strong><ul><li>20–100 mixed machines</li><li>Multiple vendors and generations</li><li>Recurring operational reporting</li><li>No unified equipment view</li></ul></div></div>
          <PilotForm />
        </div>
      </section>

      <footer className="footer">
        <div className="container footer-main"><div className="footer-brand"><Logo /><p>The equipment intelligence layer for fabrication labs.</p></div><div className="footer-links"><div><strong>Explore</strong><a href="#product">Product</a><a href="#machines">Machines</a><a href="#how-it-works">How it works</a></div><div><strong>Principles</strong><a href="#security">Security</a><a href="#security">Read-only first</a><a href="#pilot">Design partners</a></div></div></div>
        <div className="container footer-bottom"><span>© {new Date().getFullYear()} Finite Machines</span><span>Make every machine observable.</span></div>
      </footer>
    </main>
  );
}
