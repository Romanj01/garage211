// Shared presentation controls for retained templates and their client copies.
export const DEFAULT_RIGHT_TEXT = null; // null keeps the template's opening hours.
const definitions = [
  ['heroLeft', 'Левая надпись на фото', 'PRECISION IN EVERY DETAIL'],
  ['heroRight', 'Правая надпись на фото', DEFAULT_RIGHT_TEXT],
  ['portfolioLabel', 'Метка на примерах работ', 'ДЕМО-ПРИМЕР'],
];
const escapeHtml = value => String(value ?? '').replace(/[&<>"']/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));
const fallbackText = (key, value, settings) => key === 'heroRight' && value === null ? `${settings.open || ''} — ${settings.close || ''}` : value;

export function getSiteLabels(settings = {}) {
  return Object.fromEntries(definitions.flatMap(([key, , fallback]) => [
    [key + 'Text', String(settings[key + 'Text'] ?? fallbackText(key, fallback, settings)).trim().slice(0, 80)],
    [key + 'Visible', settings[key + 'Visible'] !== false],
  ]));
}

// Omitted fields preserve saved values for clients using older settings forms.
export function updateSiteLabels(input, previous = {}) {
  const result = getSiteLabels(previous);
  for (const [key] of definitions) {
    const textKey = key + 'Text', visibleKey = key + 'Visible';
    if (Object.hasOwn(input, textKey)) {
      if (typeof input[textKey] !== 'string') throw Object.assign(new Error('Текст надписи должен быть строкой'), {status: 400});
      result[textKey] = input[textKey].trim().slice(0, 80);
    }
    if (Object.hasOwn(input, visibleKey)) {
      if (typeof input[visibleKey] !== 'boolean') throw Object.assign(new Error('Укажите, показывать ли надпись'), {status: 400});
      result[visibleKey] = input[visibleKey];
    }
  }
  return result;
}

export function renderHeroLabels(settings) {
  const labels = getSiteLabels(settings);
  const content = ['heroLeft', 'heroRight'].map((key, i) => labels[key + 'Visible'] && labels[key + 'Text'] ? `<span class="pill" data-hero-label="${i === 0 ? 'left' : 'right'}">${escapeHtml(labels[key + 'Text'])}</span>` : '').join('');
  return content ? `<div class="image-top">${content}</div>` : '';
}

export function renderPortfolioLabel(work, settings) {
  const labels = getSiteLabels(settings);
  return (work.demo || work.image === '/car-studio.png') && labels.portfolioLabelVisible && labels.portfolioLabelText ? `<span class="example-label">${escapeHtml(labels.portfolioLabelText)}</span>` : '';
}

export function siteLabelsEditor(settings) {
  const labels = getSiteLabels(settings);
  return `<fieldset class="full site-label-settings"><legend>Надписи на фотографиях</legend><p class="muted">Измените текст и включите нужные надписи. Выключение сохраняет текст; пустые надписи не показываются. Метка примеров применяется ко всем демонстрационным карточкам работ.</p><div class="site-label-controls">${definitions.map(([key, title]) => `<div class="site-label-row"><label>${title}<input name="${key}Text" type="text" maxlength="80" value="${escapeHtml(labels[key + 'Text'])}"></label><label class="check"><input name="${key}Visible" type="checkbox" ${labels[key + 'Visible'] ? 'checked' : ''}>Показывать ${title.toLowerCase()}</label></div>`).join('')}</div></fieldset>`;
}

export function siteLabelFormValues(form) {
  return Object.fromEntries(definitions.map(([key]) => [key + 'Visible', form.elements[key + 'Visible'].checked]));
}
