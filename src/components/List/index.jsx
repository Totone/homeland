import React from "react";

import Card from "../GenericCard";

import { servicesList, itMonitoringList } from "../../services/i18n";
import { useTranslation } from "react-i18next";
import './list.scss';

const List = ({ type }) => {
  const { t } = useTranslation();

  const getList = () => {
    const selectedList = type === "itMonitoring"
    ? itMonitoringList
    : servicesList;

    const output = [];

    for (const listItem of selectedList) {
      output.push({
        id: listItem,
        title: t(`${type}.${listItem}.title`),
        description: t(`${type}.${listItem}.description`),
      });
    }
    return output;
  };

  const list = getList();

  return (
    <section className="cardsList">
      {
        list.map(
          (item) => (
            <Card 
              key={`listFor-${type}-for-${item.id}`}
              data={item}
            />
          )
        )
      }
    </section>
    );
  };

export default React.memo(List);
