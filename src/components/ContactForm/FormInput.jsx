import React from 'react';
import { useTranslation } from 'react-i18next';

const FormInput = ({
  id,
  value,
  onChange
}) => {
  const { t } = useTranslation();

  const Render = (
    <section className="contactForm--formInput">
      <label htmlFor={id}>{t(`contact.form.${id}.label`)}</label>
      <input 
        type="text"
        id={id}
        required={id === "email"}
        value={value}
        onChange={onChange}
        placeholder={t(`contact.form.${id}.placeholder`)}
      />
    </section>
  );
  return (
    id !== "email" ? Render
    : id === "content" ? (
      <section>
        <label htmlFor={id}>{t(`contact.form.${id}.label`)}</label>
        <textarea
          id={id}
          value={value}
          onChange={onChange}
          rows={6}
          cols={50}
        />
      </section>
    )
    : (
      <section>
        {Render}
        <p className="muted">{t(`contact.form.${id}.muted`)}</p>
      </section>
    ))

}

export default React.memo(FormInput);
