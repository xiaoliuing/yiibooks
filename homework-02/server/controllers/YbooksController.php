<?php

namespace app\controllers;

use Yii;
use app\models\Ybooks;
use yii\web\Controller;
use yii\web\NotFoundHttpException;
use yii\filters\VerbFilter;
use yii\filters\Cors;

/**
 * YbooksController implements the CRUD actions for Ybooks model.
 */
class YbooksController extends Controller
{
    /**
     * {@inheritdoc}
     */
    public function behaviors()
    {
        return [
            'corsFilter' => [
                'class' => Cors::className(),
                'cors' => [
                    'Origin' => ['*'],
                    'Access-Control-Allow-Origin' => ['*'],
                    'Access-Control-Request-Method' => ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
                    'Access-Control-Request-Headers' => ['Authorization', 'Location', 'city', 'addr'],
                ],
            ],
            'verbs' => [
                'class' => VerbFilter::className(),
                'actions' => [
                    'delete' => ['POST'],
                ],
            ],
        ];
    }


    public function actionIndex()
    {
        $query = Ybooks::find()->all();
        $response = Yii::$app->response;
        $response->format = \yii\web\Response::FORMAT_JSON;
        $response->data = $query;
    }

    public function actionDel($id)
    {
        $model = $this->findModel($id)->delete();
        $this -> resModel();
    }

    public function actionUpdate()
    {
        $data = Yii::$app->request;
        $model = $this->findModel($data -> get('id'));
        $model->b_name = $data -> get('name');
        $model->b_autor = $data -> get('autor');
        $model->b_price = $data -> get('price');
        $model->save();
        $this -> resModel();
    }

    public function actionAdd()
    {
        $data = Yii::$app->request;
        $model = new Ybooks();
        $model->b_name = $data -> get('name');
        $model->b_autor = $data -> get('autor');
        $model->b_price = $data -> get('price');
        $model->insert();
        $query = $model -> find()->all();
        $this -> resModel($query);
    }

    protected function findModel($id)
    {
        if (($model = Ybooks::findOne($id)) !== null) {
            return $model;
        }

        throw new NotFoundHttpException('The requested page does not exist.');
    }

    protected function resModel($message=['err_id' => 0])
    {
        $response = Yii::$app->response;
        $response->format = \yii\web\Response::FORMAT_JSON;
        $response->data = $message;
    }
}
