import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, FileText, Scissors, Workflow, Shield, Zap, Cloud, CheckCircle, AlertTriangle, Eye, Calendar, Cpu, Lock, DollarSign, Users, Database, TrendingUp } from 'lucide-react';

const Presentation = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 'title',
      title: 'Enterprise Document Intelligence Platform',
      subtitle: 'Building Production-Grade Unstructured Data Pipelines at Scale',
      type: 'title'
    },
    {
      id: 'parsing',
      title: 'Challenge 1: Complex Document Parsing',
      icon: FileText,
      problem: 'Documents are multimodal, but traditional processing destroys critical structure',
      painPoints: [
        { label: 'Multimodal Inadequacy', desc: 'Missing insights from images, tables, diagrams' },
        { label: 'Structural Loss', desc: 'Converting to plain text loses headings, layouts' },
        { label: 'Naive Solutions Fail', desc: 'Text descriptions introduce severe information loss' }
      ],
      goal: 'State-of-the-art transformation engine with universal representation preserving atomic knowledge units',
      type: 'challenge'
    },
    {
      id: 'chunking',
      title: 'Challenge 2: Chunking Challenges',
      icon: Scissors,
      problem: 'Segmentation fragments coherent content, reducing accuracy',
      painPoints: [
        { label: 'Logic Fragmentation', desc: 'Fixed-size chunks break tables and procedures' },
        { label: 'Semantic Incompleteness', desc: 'Short spans disrupt narrative and causal chains' },
        { label: 'Visual Context Ignored', desc: 'Text-only extraction misses layout structure' }
      ],
      goal: 'Vision-guided chunking with configurable strategies maintaining semantic coherence',
      type: 'challenge'
    },
    {
      id: 'orchestration',
      title: 'Challenge 3: Enterprise Workflow Engine',
      icon: Workflow,
      problem: 'Static RAG cannot handle dynamic, multi-step enterprise tasks',
      painPoints: [
        { label: 'Static Limitations', desc: 'Simple retrieve-read workflow too restrictive' },
        { label: 'Multi-Hop Reasoning', desc: 'Complex queries need iterative retrieval' },
        { label: 'Coordination Complexity', desc: 'Requires dynamic orchestration mechanisms' }
      ],
      goal: 'Multi-step orchestration with intelligent scheduling and job prioritization',
      type: 'challenge'
    },
    {
      id: 'governance',
      title: 'Challenge 4: Data Lineage & Governance',
      icon: Shield,
      problem: 'Lack of transparency undermines trust in sensitive domains',
      painPoints: [
        { label: 'No Traceability', desc: 'Cannot verify claims or audit decisions' },
        { label: 'Hallucination Risk', desc: 'LLMs fabricate facts without grounding' },
        { label: 'Compliance Gaps', desc: 'Regulatory requirements unmet' }
      ],
      goal: 'Complete lineage tracking with evidence-based citations and compliance frameworks',
      type: 'challenge'
    },
    {
      id: 'observability',
      title: 'Challenge 5: Observability & Monitoring',
      icon: Eye,
      problem: 'Black-box pipelines prevent debugging and performance optimization',
      painPoints: [
        { label: 'No Visibility', desc: 'Cannot track pipeline execution in real-time' },
        { label: 'Debugging Nightmare', desc: 'Failures are opaque and difficult to diagnose' },
        { label: 'Performance Blind Spots', desc: 'Cannot identify bottlenecks or optimize' }
      ],
      goal: 'Comprehensive observability with metrics, logs, traces, and real-time dashboards',
      type: 'challenge'
    },
    {
      id: 'scheduling',
      title: 'Challenge 6: Scheduling & Orchestration',
      icon: Calendar,
      problem: 'Manual processing and ad-hoc workflows cannot scale enterprise needs',
      painPoints: [
        { label: 'No Automation', desc: 'Manual triggers for batch processing' },
        { label: 'Resource Waste', desc: 'Cannot optimize compute across jobs' },
        { label: 'Dependency Hell', desc: 'Complex DAGs are hard to manage' }
      ],
      goal: 'Enterprise-grade scheduler with DAG support, resource optimization, and event-driven triggers',
      type: 'challenge'
    },
    {
      id: 'vendor-lock',
      title: 'Challenge 7: Vendor Lock-in & Flexibility',
      icon: Lock,
      problem: 'Proprietary solutions create dependency and limit innovation',
      painPoints: [
        { label: 'Vendor Lock-in', desc: 'Trapped with single provider pricing and features' },
        { label: 'Limited Choice', desc: 'Cannot leverage best-of-breed components' },
        { label: 'Innovation Lag', desc: 'Stuck waiting for vendor updates' }
      ],
      goal: 'Open architecture supporting OSS components, cloud services, and specialized APIs without lock-in',
      type: 'challenge'
    },
    {
      id: 'cost',
      title: 'Challenge 8: Cost Management & ROI',
      icon: DollarSign,
      problem: 'Expensive proprietary solutions with unpredictable costs limit adoption',
      painPoints: [
        { label: 'High Licensing Costs', desc: 'Enterprise pricing becomes prohibitive at scale' },
        { label: 'Unpredictable Usage', desc: 'Token-based pricing difficult to forecast' },
        { label: 'No Optimization', desc: 'Cannot choose cost-effective alternatives' }
      ],
      goal: 'Hybrid deployment with OSS foundation, enabling cost optimization through component selection',
      type: 'challenge'
    },
    {
      id: 'multi-tenant',
      title: 'Challenge 9: Multi-Department Platform',
      icon: Users,
      problem: 'Siloed solutions prevent enterprise-wide LLM adoption',
      painPoints: [
        { label: 'Department Silos', desc: 'Each team builds isolated solutions' },
        { label: 'Duplicated Effort', desc: 'Repeated infrastructure and processing' },
        { label: 'Inconsistent Quality', desc: 'Varying standards across organization' }
      ],
      goal: 'Unified platform delivering LLM-ready data across all departments and use cases',
      type: 'challenge'
    },
    {
      id: 'solution-overview',
      title: 'Our Enterprise-Grade Platform',
      type: 'solution-overview'
    },
    {
      id: 'architecture',
      title: 'Platform Architecture Highlights',
      type: 'architecture'
    }
  ];

  const nextSlide = () => setCurrentSlide((prev) => Math.min(prev + 1, slides.length - 1));
  const prevSlide = () => setCurrentSlide((prev) => Math.max(prev - 1, 0));

  const slide = slides[currentSlide];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white flex flex-col">
      <div className="flex-1 flex items-center justify-center p-8">
        {slide.type === 'title' && (
          <div className="text-center space-y-8 max-w-4xl animate-fade-in">
            <div className="inline-block p-4 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full mb-4">
              <Database className="w-16 h-16 text-blue-400" />
            </div>
            <h1 className="text-6xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-300 bg-clip-text text-transparent">
              {slide.title}
            </h1>
            <p className="text-2xl text-slate-300 leading-relaxed">
              {slide.subtitle}
            </p>
            <div className="mt-12 p-6 bg-amber-500/10 border border-amber-500/30 rounded-lg">
              <p className="text-lg text-amber-200">
                <TrendingUp className="inline w-5 h-5 mr-2" />
                A unified platform transforming unstructured data into LLM-ready intelligence for enterprise-wide adoption
              </p>
            </div>
          </div>
        )}

        {slide.type === 'challenge' && (
          <div className="w-full max-w-6xl space-y-6 animate-fade-in">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-lg">
                {React.createElement(slide.icon, { className: "w-10 h-10 text-blue-400" })}
              </div>
              <h2 className="text-4xl font-bold">{slide.title}</h2>
            </div>

            <div className="bg-red-500/10 border-l-4 border-red-500 p-6 rounded-r-lg mb-6">
              <h3 className="text-xl font-semibold text-red-300 mb-2">The Problem</h3>
              <p className="text-lg text-slate-300">{slide.problem}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              {slide.painPoints.map((point, idx) => (
                <div key={idx} className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-lg p-5 hover:bg-slate-800/70 transition-all">
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="w-5 h-5 text-orange-400 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-orange-300 mb-2">{point.label}</h4>
                      <p className="text-sm text-slate-400">{point.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-green-500/10 border-l-4 border-green-500 p-6 rounded-r-lg">
              <h3 className="text-xl font-semibold text-green-300 mb-2">
                <CheckCircle className="inline w-5 h-5 mr-2" />
                Our Solution
              </h3>
              <p className="text-lg text-slate-300">{slide.goal}</p>
            </div>
          </div>
        )}

        {slide.type === 'solution-overview' && (
          <div className="w-full max-w-6xl space-y-8 animate-fade-in">
            <h2 className="text-5xl font-bold text-center bg-gradient-to-r from-green-400 to-emerald-300 bg-clip-text text-transparent mb-12">
              {slide.title}
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { 
                  icon: Cpu, 
                  title: 'State-of-the-Art Engine', 
                  desc: 'Advanced transformation with multimodal processing',
                  color: 'blue' 
                },
                { 
                  icon: Eye, 
                  title: 'Full Observability', 
                  desc: 'Real-time monitoring, metrics, and tracing',
                  color: 'purple' 
                },
                { 
                  icon: Calendar, 
                  title: 'Smart Scheduling', 
                  desc: 'DAG-based orchestration with resource optimization',
                  color: 'cyan' 
                },
                { 
                  icon: Shield, 
                  title: 'Enterprise Governance', 
                  desc: 'Complete lineage, compliance, and audit trails',
                  color: 'green' 
                },
                { 
                  icon: Lock, 
                  title: 'No Vendor Lock-in', 
                  desc: 'Open architecture with plugin ecosystem',
                  color: 'amber' 
                },
                { 
                  icon: DollarSign, 
                  title: 'Cost Optimized', 
                  desc: 'OSS foundation + optional cloud services',
                  color: 'emerald' 
                },
                { 
                  icon: Users, 
                  title: 'Multi-Department', 
                  desc: 'Unified platform for all use cases',
                  color: 'indigo' 
                },
                { 
                  icon: Zap, 
                  title: 'Production Ready', 
                  desc: 'High performance with horizontal scaling',
                  color: 'pink' 
                },
                { 
                  icon: Cloud, 
                  title: 'Flexible Deployment', 
                  desc: 'Cloud, on-premise, or hybrid',
                  color: 'violet' 
                }
              ].map((item, idx) => (
                <div key={idx} className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-lg p-6 hover:scale-105 hover:bg-slate-800/70 transition-all">
                  {React.createElement(item.icon, { className: `w-10 h-10 text-${item.color}-400 mb-4` })}
                  <h3 className="font-bold text-lg text-slate-200 mb-2">{item.title}</h3>
                  <p className="text-sm text-slate-400">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {slide.type === 'architecture' && (
          <div className="w-full max-w-6xl space-y-8 animate-fade-in">
            <h2 className="text-4xl font-bold text-center mb-8">{slide.title}</h2>
            
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/30 rounded-lg p-6">
                <div className="flex items-start gap-4">
                  <Cpu className="w-8 h-8 text-blue-400 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold text-blue-300 mb-3">Transformation Engine</h3>
                    <div className="grid md:grid-cols-2 gap-4 text-sm text-slate-300">
                      <div>• Vision-based document understanding</div>
                      <div>• Multimodal content extraction</div>
                      <div>• Table & chart intelligence</div>
                      <div>• Semantic chunking strategies</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/30 rounded-lg p-6">
                <div className="flex items-start gap-4">
                  <Lock className="w-8 h-8 text-green-400 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold text-green-300 mb-3">Flexible Architecture (No Lock-in)</h3>
                    <div className="grid md:grid-cols-3 gap-4 text-sm text-slate-300">
                      <div>
                        <div className="font-semibold text-green-400 mb-2">Open Source</div>
                        <div>• Apache Spark/Dask</div>
                        <div>• PostgreSQL/Elasticsearch</div>
                        <div>• Llama, Mistral models</div>
                      </div>
                      <div>
                        <div className="font-semibold text-blue-400 mb-2">Cloud Native</div>
                        <div>• AWS Textract/Bedrock</div>
                        <div>• Azure Document AI</div>
                        <div>• GCP Vision API</div>
                      </div>
                      <div>
                        <div className="font-semibold text-purple-400 mb-2">Specialized SaaS</div>
                        <div>• Unstructured.io</div>
                        <div>• LlamaIndex/LangChain</div>
                        <div>• Custom SDKs</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/30 rounded-lg p-6">
                <div className="flex items-start gap-4">
                  <Eye className="w-8 h-8 text-purple-400 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold text-purple-300 mb-3">Observability & Operations</h3>
                    <div className="grid md:grid-cols-2 gap-4 text-sm text-slate-300">
                      <div>• Real-time pipeline monitoring</div>
                      <div>• Distributed tracing (OpenTelemetry)</div>
                      <div>• Custom metrics & dashboards</div>
                      <div>• Alert & incident management</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-amber-500/10 to-orange-500/10 border border-amber-500/30 rounded-lg p-6">
                <div className="flex items-start gap-4">
                  <Users className="w-8 h-8 text-amber-400 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold text-amber-300 mb-3">Enterprise-Wide Platform</h3>
                    <div className="grid md:grid-cols-2 gap-4 text-sm text-slate-300">
                      <div>• Multi-tenant architecture</div>
                      <div>• Department-specific pipelines</div>
                      <div>• Centralized LLM-ready data lake</div>
                      <div>• Self-service data preparation</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 p-6 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-lg border border-green-500/30 text-center">
              <p className="text-xl font-semibold text-green-200">
                <CheckCircle className="inline w-6 h-6 mr-2" />
                Production-grade platform transforming enterprise documents into actionable intelligence
              </p>
            </div>
          </div>
        )}
      </div>

      <div className="flex items-center justify-between p-6 bg-slate-900/80 backdrop-blur border-t border-slate-700">
        <button
          onClick={prevSlide}
          disabled={currentSlide === 0}
          className="flex items-center gap-2 px-4 py-2 bg-slate-800 hover:bg-slate-700 disabled:bg-slate-800/50 disabled:text-slate-600 rounded-lg transition-colors"
        >
          <ChevronLeft className="w-5 h-5" />
          Previous
        </button>

        <div className="flex items-center gap-4">
          <span className="text-sm text-slate-400">
            {currentSlide + 1} / {slides.length}
          </span>
          <div className="flex gap-2">
            {slides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                className={`w-2 h-2 rounded-full transition-all ${
                  idx === currentSlide ? 'bg-blue-400 w-8' : 'bg-slate-600 hover:bg-slate-500'
                }`}
              />
            ))}
          </div>
        </div>

        <button
          onClick={nextSlide}
          disabled={currentSlide === slides.length - 1}
          className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-500 disabled:bg-slate-800/50 disabled:text-slate-600 rounded-lg transition-colors"
        >
          Next
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.5s ease-out;
        }
      `}</style>
    </div>
  );
};

export default Presentation;