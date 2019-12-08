<?php

namespace app\models;

use yii\base\Model;
use yii\data\ActiveDataProvider;
use app\models\Ybooks;


class YbooksSearch extends Ybooks
{

    public function rules()
    {
        return [
            [['id', 'b_price'], 'integer'],
            [['b_name', 'b_autor', 'b_add_time'], 'safe'],
        ];
    }


    public function scenarios()
    {
        return Model::scenarios();
    }


    public function search($params)
    {
        $query = Ybooks::find();

        $dataProvider = new ActiveDataProvider([
            'query' => $query,
        ]);

        $this->load($params);

        if (!$this->validate()) {
            return $dataProvider;
        }

        $query->andFilterWhere([
            'id' => $this->id,
            'b_price' => $this->b_price,
            'b_add_time' => $this->b_add_time,
        ]);

        $query->andFilterWhere(['like', 'b_name', $this->b_name])
            ->andFilterWhere(['like', 'b_autor', $this->b_autor]);

        return $dataProvider;
    }
}
