// قاموس اللغات (Internationalization Dictionary)
const dictionary = {
  en: {
    "main-title": "Software Cost Estimation Tool",
    "btn-calculate": "Calculate",
    "res-title": "Results",
    "alert-missing": "Please Enter All Values",
    "loc-heading": "LOC / KLOC Estimation",
    "placeholder-loc": "LOC / KLOC",
    "placeholder-productivity": "Productivity",
    "placeholder-cost-month": "Cost Per Month",
    "fp-heading": "Function Point",
    "sub-inputs": "User Inputs",
    "sub-outputs": "User Outputs",
    "sub-inquiries": "User Inquiries",
    "sub-files": "Files",
    "sub-interfaces": "External Interfaces",
    "placeholder-inputs-count": "Inputs Count",
    "placeholder-outputs-count": "Outputs Count",
    "placeholder-inquiries-count": "Inquiries Count",
    "placeholder-files-count": "Files Count",
    "placeholder-interfaces-count": "External Interfaces Count",
    "placeholder-factor": "Processing Complexity Factor",
    "placeholder-effort": "Effort",
    "opt-simple": "Simple",
    "opt-average": "Average",
    "opt-complex": "Complex",
    "opt-medium": "Medium",
    "opt-difficult": "Difficult",
    "op-heading": "Object Point",
    "sub-screens": "Screens",
    "sub-reports": "Reports",
    "placeholder-screens-count": "Number Of Screens",
    "placeholder-reports-count": "Number Of Reports",
    "placeholder-reuse": "Reuse Percentage",
    "placeholder-cost-rate": "Cost Rate",
    "opt-vlow": "Very Low",
    "opt-low": "Low",
    "opt-nominal": "Nominal",
    "opt-high": "High",
    "opt-vhigh": "Very High",
    "cocomo-heading": "COCOMO",
    "placeholder-kloc": "KLOC",
    "placeholder-cost-dev": "Cost Per Developer / Month",
    "opt-organic": "Organic",
    "opt-semi": "Semi Detached",
    "opt-embedded": "Embedded",
    "ucp-heading": "Use Case Point",
    "sub-actors": "Actors",
    "sub-usecases": "Use Cases",
    "placeholder-s-actors": "Simple Actors",
    "placeholder-a-actors": "Average Actors",
    "placeholder-c-actors": "Complex Actors",
    "placeholder-s-uc": "Simple Use Cases",
    "placeholder-a-uc": "Average Use Cases",
    "placeholder-c-uc": "Complex Use Cases",
    "placeholder-tech-factor": "Technical Factor Total",
    "placeholder-env-factor": "Environmental Factor Total",
    "placeholder-prod-factor": "Productivity Factor",
  },
  ar: {
    "main-title": "برنامج تقدير تكاليف البرمجيات",
    "btn-calculate": "احسب الآن",
    "res-title": "النتائج",
    "alert-missing": "برجاء إدخال جميع القيم المطلوبة",
    "loc-heading": "التقدير بأسلوب أسطر الكود (LOC / KLOC)",
    "placeholder-loc": "عدد أسطر الكود (LOC / KLOC)",
    "placeholder-productivity": "الإنتاجية",
    "placeholder-cost-month": "التكلفة شهرياً",
    "fp-heading": "نقاط الوظائف (Function Point)",
    "sub-inputs": "مدخلات المستخدم",
    "sub-outputs": "مخرجات المستخدم",
    "sub-inquiries": "استعلامات المستخدم",
    "sub-files": "الملفات الداخلية",
    "sub-interfaces": "الواجهات الخارجية",
    "placeholder-inputs-count": "عدد المدخلات",
    "placeholder-outputs-count": "عدد المخرجات",
    "placeholder-inquiries-count": "عدد الاستعلامات",
    "placeholder-files-count": "عدد الملفات",
    "placeholder-interfaces-count": "عدد الواجهات الخارجية",
    "placeholder-factor": "عامل تعقيد المعالجة",
    "placeholder-effort": "الجهد المبذول",
    "opt-simple": "بسيط",
    "opt-average": "متوسط",
    "opt-complex": "معقد",
    "opt-medium": "متوسط التعقيد",
    "opt-difficult": "صعب",
    "op-heading": "نقاط العناصر (Object Point)",
    "sub-screens": "الشاشات",
    "sub-reports": "التقارير",
    "placeholder-screens-count": "عدد الشاشات",
    "placeholder-reports-count": "عدد التقارير",
    "placeholder-reuse": "نسبة إعادة الاستخدام (%)",
    "placeholder-cost-rate": "معدل التكلفة",
    "opt-vlow": "منخفض جداً",
    "opt-low": "منخفض",
    "opt-nominal": "طبيعي",
    "opt-high": "عالي",
    "opt-vhigh": "عالي جداً",
    "cocomo-heading": "نموذج كوكومو الإحصائي (COCOMO)",
    "placeholder-kloc": "عدد الأسطر بآلاف الـ KLOC",
    "placeholder-cost-dev": "تكلفة المطور الواحد / شهرياً",
    "opt-organic": "عضوي / بسيط (Organic)",
    "opt-semi": "شبه منفصل (Semi Detached)",
    "opt-embedded": "مدمج / معقد (Embedded)",
    "ucp-heading": "نقاط حالات الاستخدام (Use Case Point)",
    "sub-actors": "العناصر الفاعلة (Actors)",
    "sub-usecases": "حالات الاستخدام (Use Cases)",
    "placeholder-s-actors": "عناصر فاعلة بسيطة",
    "placeholder-a-actors": "عناصر فاعلة متوسطة",
    "placeholder-c-actors": "عناصر فاعلة معقدة",
    "placeholder-s-uc": "حالات استخدام بسيطة",
    "placeholder-a-uc": "حالات استخدام متوسطة",
    "placeholder-c-uc": "حالات استخدام معقدة",
    "placeholder-tech-factor": "إجمالي العامل التقني",
    "placeholder-env-factor": "إجمالي العامل البيئي",
    "placeholder-prod-factor": "عامل الإنتاجية",
  },
  es: {
    "main-title": "Herramienta de Estimación de Costos",
    "btn-calculate": "Calcular",
    "res-title": "Resultados",
    "alert-missing": "Por favor, introduzca todos los valores",
    "loc-heading": "Estimación por LOC / KLOC",
    "placeholder-loc": "Líneas de Código (LOC / KLOC)",
    "placeholder-productivity": "Productividad",
    "placeholder-cost-month": "Costo por Mes",
    "fp-heading": "Punto de Función",
    "sub-inputs": "Entradas de Usuario",
    "sub-outputs": "Salidas de Usuario",
    "sub-inquiries": "Consultas de Usuario",
    "sub-files": "Archivos",
    "sub-interfaces": "Interfaces Externas",
    "placeholder-inputs-count": "Recuento de Entradas",
    "placeholder-outputs-count": "Recuento de Salidas",
    "placeholder-inquiries-count": "Recuento de Consultas",
    "placeholder-files-count": "Recuento de Archivos",
    "placeholder-interfaces-count": "Recuento de Interfaces",
    "placeholder-factor": "Factor de Complejidad",
    "placeholder-effort": "Esfuerzo",
    "opt-simple": "Simple",
    "opt-average": "Promedio",
    "opt-complex": "Complejo",
    "opt-medium": "Medio",
    "opt-difficult": "Difícil",
    "op-heading": "Punto de Objeto",
    "sub-screens": "Pantallas",
    "sub-reports": "Informes",
    "placeholder-screens-count": "Número de Pantallas",
    "placeholder-reports-count": "Número de Informes",
    "placeholder-reuse": "Porcentaje de Reutilización",
    "placeholder-cost-rate": "Tasa de Costo",
    "opt-vlow": "Muy Bajo",
    "opt-low": "Bajo",
    "opt-nominal": "Nominal",
    "opt-high": "Alto",
    "opt-vhigh": "Muy Alto",
    "cocomo-heading": "Modelo COCOMO",
    "placeholder-kloc": "KLOC",
    "placeholder-cost-dev": "Costo por Desarrollador / Mes",
    "opt-organic": "Orgánico",
    "opt-semi": "Semi-Acoplado",
    "opt-embedded": "Incrustado",
    "ucp-heading": "Punto de Caso de Uso",
    "sub-actors": "Actores",
    "sub-usecases": "Casos de Uso",
    "placeholder-s-actors": "Actores Simples",
    "placeholder-a-actors": "Actores Promedio",
    "placeholder-c-actors": "Actores Complejos",
    "placeholder-s-uc": "Casos de Uso Simples",
    "placeholder-a-uc": "Casos de Uso Promedio",
    "placeholder-c-uc": "Casos de Uso Complejos",
    "placeholder-tech-factor": "Factor Técnico Total",
    "placeholder-env-factor": "Factor Ambiental Total",
    "placeholder-prod-factor": "Factor de Productividad",
  },
};

let currentLang = "en";

// دالة تفعيل وترجمة الصفحة بالكامل
function changeLanguage(lang) {
  currentLang = lang;
  document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
  document.documentElement.lang = lang;

  // ترجمة النصوص العادية
  document.querySelectorAll("[data-i18n]").forEach((elem) => {
    const key = elem.getAttribute("data-i18n");
    if (dictionary[lang][key]) elem.textContent = dictionary[lang][key];
  });

  // ترجمة الـ Placeholders داخل الـ Inputs
  document.querySelectorAll("[data-i18n-placeholder]").forEach((elem) => {
    const key = elem.getAttribute("data-i18n-placeholder");
    if (dictionary[lang][key])
      elem.setAttribute("placeholder", dictionary[lang][key]);
  });

  // مسح النتائج السابقة لعدم تداخل اللغات
  document.querySelectorAll(".result").forEach((r) => (r.innerHTML = ""));
}

// ربط الـ Select Selector بالحدث
document.getElementById("langSelect").addEventListener("change", (e) => {
  changeLanguage(e.target.value);
});

function showTab(tabId, e) {
  const tabs = document.querySelectorAll(".tab-content");
  tabs.forEach((tab) => {
    tab.classList.remove("active");
  });

  document.getElementById(tabId).classList.add("active");

  const buttons = document.querySelectorAll(".tab-btn");
  buttons.forEach((btn) => {
    btn.classList.remove("active");
  });

  if (e && e.target) {
    e.target.classList.add("active");
  }
}

/* =========================
   LOC / KLOC
========================= */
function calculateLOC() {
  const size = parseFloat(document.getElementById("locSize").value);
  const productivity = parseFloat(
    document.getElementById("locProductivity").value,
  );
  const cost = parseFloat(document.getElementById("locCost").value);

  if (!size || !productivity || !cost) {
    alert(dictionary[currentLang]["alert-missing"]);
    return;
  }

  const effort = size / productivity;
  const totalCost = effort * cost;

  document.getElementById("locResult").innerHTML = `
    <h3>${dictionary[currentLang]["res-title"]}</h3>
    <p><strong>${currentLang === "ar" ? "الجهد:" : "Effort:"}</strong> ${effort.toFixed(2)} ${currentLang === "ar" ? "شخص-شهر" : "Person-Month"}</p>
    <p><strong>${currentLang === "ar" ? "التكلفة الإجمالية:" : "Total Cost:"}</strong> $${totalCost.toFixed(2)}</p>
    `;
}

/* =========================
   FUNCTION POINT
========================= */
function calculateFP() {
  const ei =
    (parseFloat(document.getElementById("eiCount").value) || 0) *
    parseFloat(document.getElementById("eiComplexity").value);
  const eo =
    (parseFloat(document.getElementById("eoCount").value) || 0) *
    parseFloat(document.getElementById("eoComplexity").value);
  const eq =
    (parseFloat(document.getElementById("eqCount").value) || 0) *
    parseFloat(document.getElementById("eqComplexity").value);
  const ilf =
    (parseFloat(document.getElementById("ilfCount").value) || 0) *
    parseFloat(document.getElementById("ilfComplexity").value);
  const eif =
    (parseFloat(document.getElementById("eifCount").value) || 0) *
    parseFloat(document.getElementById("eifComplexity").value);

  const ufp = ei + eo + eq + ilf + eif;
  const factor = parseFloat(document.getElementById("fpFactor").value) || 0;
  const effort = parseFloat(document.getElementById("fpEffort").value) || 0;
  const cost = parseFloat(document.getElementById("fpCost").value) || 0;

  const vaf = 0.65 + 0.01 * factor;
  const fp = ufp * vaf;
  const productivity = fp / effort;
  const totalCost = effort * cost;
  const costPerFP = totalCost / fp;

  document.getElementById("fpResult").innerHTML = `
    <h3>${dictionary[currentLang]["res-title"]}</h3>
    <p><strong>UFP:</strong> ${ufp.toFixed(2)}</p>
    <p><strong>VAF:</strong> ${vaf.toFixed(2)}</p>
    <p><strong>FP:</strong> ${fp.toFixed(2)}</p>
    <p><strong>${currentLang === "ar" ? "الإنتاجية:" : "Productivity:"}</strong> ${productivity.toFixed(2)}</p>
    <p><strong>${currentLang === "ar" ? "التكلفة الإجمالية:" : "Total Cost:"}</strong> $${totalCost.toFixed(2)}</p>
    <p><strong>${currentLang === "ar" ? "تكلفة نقطة الوظيفة الواحدة:" : "Cost Per FP:"}</strong> $${costPerFP.toFixed(2)}</p>
    `;
}

/* =========================
   OBJECT POINT
========================= */
function calculateOP() {
  const screens =
    (parseFloat(document.getElementById("screenCount").value) || 0) *
    parseFloat(document.getElementById("screenWeight").value);
  const reports =
    (parseFloat(document.getElementById("reportCount").value) || 0) *
    parseFloat(document.getElementById("reportWeight").value);

  const op = screens + reports;
  const reuse = parseFloat(document.getElementById("reuse").value) || 0;
  const productivity = parseFloat(
    document.getElementById("productivity").value,
  );
  const cost = parseFloat(document.getElementById("opCost").value) || 0;

  const nop = op * ((100 - reuse) / 100);
  const effort = nop / productivity;
  const totalCost = effort * cost;

  document.getElementById("opResult").innerHTML = `
    <h3>${dictionary[currentLang]["res-title"]}</h3>
    <p><strong>Object Points:</strong> ${op.toFixed(2)}</p>
    <p><strong>New Object Points:</strong> ${nop.toFixed(2)}</p>
    <p><strong>${currentLang === "ar" ? "الجهد:" : "Effort:"}</strong> ${effort.toFixed(2)} ${currentLang === "ar" ? "شخص-شهر" : "Person-Month"}</p>
    <p><strong>${currentLang === "ar" ? "التكلفة الإجمالية:" : "Total Cost:"}</strong> $${totalCost.toFixed(2)}</p>
    `;
}

/* =========================
   COCOMO
========================= */
function calculateCOCOMO() {
  const kloc = parseFloat(document.getElementById("kloc").value) || 0;
  const type = document.getElementById("projectType").value;
  const cost = parseFloat(document.getElementById("cocomoCost").value) || 0;

  let a, b, c;
  if (type === "organic") {
    a = 2.4;
    b = 1.05;
    c = 0.38;
  } else if (type === "semi") {
    a = 3.0;
    b = 1.12;
    c = 0.35;
  } else {
    a = 3.6;
    b = 1.2;
    c = 0.32;
  }

  const effort = a * Math.pow(kloc, b);
  const time = 2.5 * Math.pow(effort, c);
  const teamSize = effort / time;
  const totalCost = effort * cost;

  document.getElementById("cocomoResult").innerHTML = `
    <h3>${dictionary[currentLang]["res-title"]}</h3>
    <p><strong>${currentLang === "ar" ? "الجهد:" : "Effort:"}</strong> ${effort.toFixed(2)} ${currentLang === "ar" ? "شخص-شهر" : "Person-Month"}</p>
    <p><strong>${currentLang === "ar" ? "وقت التطوير:" : "Development Time:"}</strong> ${time.toFixed(2)} ${currentLang === "ar" ? "شهور" : "Months"}</p>
    <p><strong>${currentLang === "ar" ? "حجم فريق العمل:" : "Team Size:"}</strong> ${teamSize.toFixed(2)} ${currentLang === "ar" ? "مطورين" : "Developers"}</p>
    <p><strong>${currentLang === "ar" ? "التكلفة الإجمالية:" : "Total Cost:"}</strong> $${totalCost.toFixed(2)}</p>
    `;
}

/* =========================
   USE CASE POINT
========================= */
function calculateUCP() {
  const simpleActors =
    (parseFloat(document.getElementById("simpleActors").value) || 0) * 1;
  const averageActors =
    (parseFloat(document.getElementById("averageActors").value) || 0) * 2;
  const complexActors =
    (parseFloat(document.getElementById("complexActors").value) || 0) * 3;
  const uaw = simpleActors + averageActors + complexActors;

  const simpleUC =
    (parseFloat(document.getElementById("simpleUC").value) || 0) * 5;
  const averageUC =
    (parseFloat(document.getElementById("averageUC").value) || 0) * 10;
  const complexUC =
    (parseFloat(document.getElementById("complexUC").value) || 0) * 15;
  const uucw = simpleUC + averageUC + complexUC;

  const technicalFactor =
    parseFloat(document.getElementById("technicalFactor").value) || 0;
  const environmentFactor =
    parseFloat(document.getElementById("environmentFactor").value) || 0;
  const productivityFactor =
    parseFloat(document.getElementById("productivityFactor").value) || 0;
  const costRate = parseFloat(document.getElementById("ucpCost").value) || 0;

  const uucp = uaw + uucw;
  const tcf = 0.6 + 0.01 * technicalFactor;
  const ef = 1.4 - 0.03 * environmentFactor;
  const ucp = uucp * tcf * ef;
  const effort = ucp * productivityFactor;
  const totalCost = effort * costRate;

  document.getElementById("ucpResult").innerHTML = `
    <h3>${dictionary[currentLang]["res-title"]}</h3>
    <p><strong>UAW:</strong> ${uaw.toFixed(2)}</p>
    <p><strong>UUCW:</strong> ${uucw.toFixed(2)}</p>
    <p><strong>UUCP:</strong> ${uucp.toFixed(2)}</p>
    <p><strong>TCF:</strong> ${tcf.toFixed(2)}</p>
    <p><strong>EF:</strong> ${ef.toFixed(2)}</p>
    <p><strong>UCP:</strong> ${ucp.toFixed(2)}</p>
    <p><strong>${currentLang === "ar" ? "الجهد بالتوقيت:" : "Effort:"}</strong> ${effort.toFixed(2)} ${currentLang === "ar" ? "ساعة" : "Hours"}</p>
    <p><strong>${currentLang === "ar" ? "التكلفة الإجمالية:" : "Total Cost:"}</strong> $${totalCost.toFixed(2)}</p>
    `;
}
